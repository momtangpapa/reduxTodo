const addTodo = data => {
  return {
    type: 'ADD_TODO',
    payload: data,
  };
};

const deleteTodo = data => {
  return {
    type: 'DELETE_TODO',
    payload: data,
  };
};

const checkTodo = data => {
  return {
    type: 'CHECK_TODO',
    payload: data,
  };
};

const unCheckTodo = data => {
  return {
    type: 'UNCHECK_TODO',
    payload: data,
  };
};

export default {addTodo, deleteTodo, checkTodo, unCheckTodo};
