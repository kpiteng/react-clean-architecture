/* eslint-disable import/no-unresolved */
// @flow
import APIHandler from '../APIHandler';
import * as Globals from '../../../application/common/Globals';

export default {
  getListData: () => APIHandler.get(`${Globals.TaskList}`),
};
