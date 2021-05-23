import { createBlacklistFilter } from 'redux-persist-transform-filter';

const toDoFilter = createBlacklistFilter('ToDo', ['totalTasks']);

export const AllFilters = [toDoFilter];
