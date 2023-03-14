import axios from "axios";
import {LOAD_TODOS_SUCCESS, ADD_TODO_SUCCESS, TOGGLE_TODO_SUCCESS, DELETE_TODO_SUCCESS} from '../Actions/Actions'

export const API_URL = "https://jsonplaceholder.typicode.com/todos";

export function loadTodos() {
  
  return async function (dispatch) {
    const response = await axios.get(API_URL);

    const newTodos = response.data.map(todo => ({
        ...todo,
        id: Math.floor(Math.random() * Date.now())
    }));

    dispatch({
      type: LOAD_TODOS_SUCCESS,
      payload: { todos: newTodos },
    });
};


}

export function addTodo(todo) {

  return async function (dispatch) {
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: { todo },
    });
  };
}

export function toggleTodoCompleted(id) {
  return async function (dispatch) {
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      payload: { id },
    });
  };
}


export function deleteTodo(id) {

  return async function (dispatch) {
    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: { id },
    });
  };
}
