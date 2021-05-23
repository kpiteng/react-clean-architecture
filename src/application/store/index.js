/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { init } from '@rematch/core';
import logger from 'redux-logger';

import * as models from '../models';
import { loadingPlugin } from '../plugins';
import { persistPlugin } from '../persist';

export default init({
  models,
  plugins: [loadingPlugin, persistPlugin],
  redux: {
    middlewares: [logger],
  },
});
