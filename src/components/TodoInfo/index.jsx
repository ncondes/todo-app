const TodoInfo = (props) => (
  <div className='todo__info'>
    <p className='items__left'>{props.todosLeft} items left</p>
    <span className='items__clear' onClick={props.clearTodos}>Clear Completed</span>
  </div>
)

export { TodoInfo }