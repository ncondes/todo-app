import React from "react";

const CreateTodo = (props) => {

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
    <form className='todo__create' onSubmit={onSubmit}>
      <div className='todo__check'></div>
      <div>
        <input
          className='input__text'
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