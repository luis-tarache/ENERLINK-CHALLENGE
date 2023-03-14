import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodoCompleted, loadTodos } from '../Thunks/Thunks';
import { useEffect, useState } from 'react';
import ButtonTask from '../Components/ButtonTask';
import { Container, List, ListItem, Label, Input, Button, Paragraph } from '../Utils/styleTodoList';
import TodoForm from './TodoForm';


function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const [activeList, setActiveList] = useState(todos);
  const [activeClick, setActiveClick] = useState('');
  

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  useEffect(()=>{
    if (activeClick === 'showTodosCompleted') {
      showTodosCompleted()
    }

    if (activeClick === 'showTodosIncompleted') {
      showTodosIncompleted()
    }

    if (activeClick === 'reset') {
      reset()
    }
  }, [todos, activeClick])


  function handleDelete(todo) {
    dispatch(deleteTodo(todo.id));
  }

  function handleToggle(todo) {
    dispatch(toggleTodoCompleted(todo.id));
  }

  const showTodosCompleted = () => {
    const filteredTodos = todos.filter((todo) => todo.completed);
    setActiveList(filteredTodos);
    setActiveClick('showTodosCompleted')
  };

  const showTodosIncompleted = () => {
    const filteredTodos = todos.filter((todo) => todo.completed === false);
    setActiveList(filteredTodos);
    setActiveClick('showTodosIncompleted')
  };

  const reset = () => {
    setActiveList(todos);
    setActiveClick('reset')
  };

  const propsTodosCompleted = {
    onClick: showTodosCompleted,
    buttonText: 'Mostrar tareas completadas',
  };

  const propsTodosIncompleted = {
    onClick: showTodosIncompleted,
    buttonText: 'Mostrar tareas incompletas',
  };

  const propsTodosReset = {
    onClick: reset,
    buttonText: 'Mostrar todas las tareas',
  };

  return (
    <Container>
      <List>
        {activeList.length > 0 ? (
          <>
            {activeList.map((todo) => (
              <ListItem key={todo.id}>
                <Label>
                  <Input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo)}
                  />
                  {todo.title}
                </Label>
                <Button onClick={() => handleDelete(todo)}>Eliminar</Button>
              </ListItem>
            ))}
          </>
        ) : (
          <>
            {todos.map((todo) => (
              <ListItem key={todo.id}>
                <Label>
                  <Input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo)}
                  />
                  {todo.title}
                </Label>
                <Button onClick={() => handleDelete(todo)}>Eliminar</Button>
              </ListItem>
            ))}
          </>
        )}
      </List>
      <Paragraph>Tareas completadas: {completedTodos}</Paragraph>
      <div style={{ display: 'flex' }}>
      <ButtonTask {...propsTodosCompleted} />
      <ButtonTask {...propsTodosIncompleted} />
      <ButtonTask {...propsTodosReset} />
      </div>
      <TodoForm/>
    </Container>
  );
}

export default TodoList;

  