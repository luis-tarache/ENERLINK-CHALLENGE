const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS";
const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";


  function todosReducer(state = [], action) {
    switch (action.type) {
      case LOAD_TODOS_SUCCESS:
        return [
          ...state,
          ...action.payload.todos
        ];
      case ADD_TODO_SUCCESS:
        return [
          ...state,
          action.payload.todo
        ];
      case TOGGLE_TODO_SUCCESS:
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case DELETE_TODO_SUCCESS:
        return state.filter((todo) => todo.id !== action.payload.id);

      default:
        return state;
    }
  }

  export {LOAD_TODOS_SUCCESS, ADD_TODO_SUCCESS, TOGGLE_TODO_SUCCESS, DELETE_TODO_SUCCESS, todosReducer as default};