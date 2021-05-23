/* eslint-disable import/no-unresolved */
import AsyncStorage from '@react-native-community/async-storage';
import createRematchPersist from '@rematch/persist';
import { AllFilters } from '../filters';

export const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: ['ToDo'],
  version: 1,
  storage: AsyncStorage,
  transforms: AllFilters,
});
