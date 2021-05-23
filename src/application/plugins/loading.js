import createLoadingPlugin from '@rematch/loading';

export const loadingPlugin = createLoadingPlugin({
  whitelist: ['ToDo/fetchTasks'],
});
