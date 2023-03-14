import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../Thunks/Thunks'
import { Form, InputForm, ButtonForm } from '../Utils/styleTodoList';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      const todo = {
        title: inputValue,
        id: Math.floor(Math.random() * Date.now()),
        completed: false
      }
      dispatch(addTodo(todo));
    }
    setInputValue('');
  };
  
  

  return (
    <Form onSubmit={handleSubmit}>
      <InputForm
        type="text"
        placeholder="Nueva tarea"
        value={inputValue}
        onChange={handleChange}
      />
      <ButtonForm type="submit">Agregar</ButtonForm>
    </Form>
  );
}

export default TodoForm;
