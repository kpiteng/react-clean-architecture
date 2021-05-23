export const logger = (store) => (next) => (action) => {
    const result = next(action);
    return result;
  };
  