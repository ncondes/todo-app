import React, { useContext } from "react";
import { ThemeContext } from '../ThemeContext';

const CreateTodo = (props) => {

  const [{ isDark }] = useContext(ThemeContext)

  const [newTodoValue, setNewTodoValue] = React.useState('');

  // function to keep update the state of the value of the input
  const onInputChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  // function to add new todo when submit the form
  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodo(newTodoValue);
    setNewTodoValue('');
  }

  return (
    <form className={`todo__create ${isDark? 'todo__create--dark' :'todo__create--light'}`} onSubmit={onSubmit}>
      <div className={`todo__check ${isDark ? 'todo__check--dark' : 'todo__check--light'}`}></div>
      <div>
        <input
          className={`input__text ${isDark? 'input__text--dark' : 'input__text--light'}`}
          id='input__text'
          type='text'
          placeholder='Create a new todo...'
          value={newTodoValue}
          onChange={onInputChange}
        />
        <label htmlFor="input__text" className='label'></label>
      </div>
      {/* <div>cross-icon</div> */}
    </form>
  )
}

export { CreateTodo }