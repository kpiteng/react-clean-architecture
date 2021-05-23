import { List } from '../../infrastructure/api/api';
export const ToDo = {
  state: {
    arrTasks: [],
    arrAPITasks: [],
    totalTasks: 3,
  },
  reducers: {
    setTasks(state, payload) {
      return {
        ...state,
        arrTasks: payload,
      };
    },
    setAPITasks(state, payload) {
      return {
        ...state,
        arrAPITasks: payload,
      };
    },
    clear() {
      return {
        arrBeneficiary: [],
      };
    },
  },
  effects: (dispatch) => ({
    async fetchTasks() {
      try {
        dispatch.ToDo.setTasks([
            {
                taskID: 1,
                taskName: 'Task #1',
            },
            {
                taskID: 2,
                taskName: 'Task #2',
            },
            {
                taskID: 3,
                taskName: 'Task #3',
            }
        ]);
      } catch (error) {
      }
    },
    async fetchTasksFromServer() {
      try {
        const response = await List.getListData().toPromise();
        dispatch.ToDo.setAPITasks(response);
      } catch (error) {
      }
    },
  }),
};
