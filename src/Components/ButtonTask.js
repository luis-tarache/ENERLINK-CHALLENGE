import React from 'react';
import {ButtonComponent} from '../Utils/styleTodoList'

const ButtonTask = ({onClick, buttonText, isActive}) => {


  return (
    <ButtonComponent onClick={onClick}>{buttonText}</ButtonComponent>
  );
}

export default ButtonTask;
