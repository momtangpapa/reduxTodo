const initialState = [];

const TodoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...prevState, action.payload];
    case 'DELETE_TODO':
      return [...action.payload];
    case 'CHECK_TODO':
      return [...action.payload];
    case 'UNCHECK_TODO':
      return [...action.payload];
    default:
      return prevState;
  }
};

export default TodoReducer;
