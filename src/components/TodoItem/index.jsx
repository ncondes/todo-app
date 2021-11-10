const TodoItem = (props) => {
  return (
    <li className='todo__item'>
      <div className={`todo__check ${props.done && 'todo__check--active'}`} onClick={props.onDone}>
        <img className='todo__item--img' src="../assets/img/icon-check.svg" alt="icon-check" />
      </div>
      <p className={`todo__item--text ${props.done && 'todo__item--text--active'}`}>{props.text}</p>
      <img src='../assets/img/icon-cross.svg' onClick={props.onDelete}></img>
    </li>
  )
}

export { TodoItem }