import './App.css';
import { Provider } from "react-redux";
import store from './Store/Store'
import TodoList from './Components/TodoList'

function App() {
  return (
    <Provider store={store}> 
      <TodoList/>
    </Provider> 
  );
}

export default App;
