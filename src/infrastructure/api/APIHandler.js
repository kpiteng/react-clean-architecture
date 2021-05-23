/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-await */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// @flow
import { Alert } from 'react-native';
import { Observable, throwError, from } from 'rxjs';
import {
  mergeMap, retryWhen, take, delay, catchError, map,
} from 'rxjs/operators';
import axios, { AxiosPromise } from 'axios';
import * as Globals from '../../application/common/Globals';

async function handleRequest(req) {
  const ts = new Date().getTime();
  req.headers.Accept = 'application/json';
  req.headers.timestamp = ts;
  return req;
}

/**
 * This is used to manage errors from api calls by checking needed information
 * before responding to the caller.
 * @param err
 * @returns {Observable<never>}
 */
function errorHandler(err): Observable<any> {
  const message = Globals.errorEncountered;
  if (err && err.status === 0) Object.assign(err.data, { message });
  if (err.code === 'ECONNABORTED') Alert.alert(Globals.timeoutMessage);
  console.log({ err });
  return throwError(err);
}

/**
 * This is used to modify the header request and relies on some header constraints
 * to generate some header fields
 */
axios.interceptors.request.use(
  async (req: any) => await handleRequest(req),
  (error) => Promise.reject(error),
);

/**
 * This takes in a promise and convert to an observable
 * then makes the api request, it tries the api call 2 times only if failed
 * before responding to the caller.
 * @param apiCaller
 * @returns {Observable<*>}
 */
function processApiRequest(apiCaller: AxiosPromise<any>): Observable<any> {
  return from(apiCaller).pipe(
    retryWhen((errors) => errors.pipe(
      mergeMap((err) => errorHandler(err)),
      delay(1000),
      take(2),
    )),
    catchError((err) => errorHandler(err.response)),
    map((res) => res.data),
  );
}

/** *
 * The ApiHandler framework with observable
 */
export default {
  post: (url: string, data: any, options?: any) => processApiRequest(
    axios.post(
      options && options.fullPath ? url : Globals.BaseURL + url,
      data,
      { timeout: Globals.timeoutDuration },
      options && { headers: options },
    ),
  ),
  put: (url: string, data: any, options?: any) => processApiRequest(
    axios.put(
      options && options.fullPath ? url : Globals.BaseURL + url,
      data,
      { timeout: Globals.timeoutDuration },
      options && { headers: options },
    ),
  ),
  delete: (url: string, options?: any, data?: any) => {
    data = data ? (data instanceof Object && !Object.keys(data).length ? null : data) : null;
    const config = data
      ? { headers: options, data, timeout: Globals.timeoutDuration }
      : { headers: options, data: '', timeout: Globals.timeoutDuration };
    return processApiRequest(
      axios.delete(options && options.fullPath ? url : Globals.BaseURL + url, config),
    );
  },
  get: (url: string, options?: any, data?: any) => {
    data = data ? (data instanceof Object && !Object.keys(data).length ? null : data) : null;
    const config = data
      ? { headers: options, data, timeout: Globals.timeoutDuration }
      : { headers: options, data: '', timeout: Globals.timeoutDuration };
    return processApiRequest(
      axios.get(options && options.fullPath ? url : Globals.BaseURL + url, config),
    );
  },
};
