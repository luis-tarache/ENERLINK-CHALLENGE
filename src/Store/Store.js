import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todosReducer from "../Actions/Actions";

const rootReducer = {
  todos: todosReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;




  