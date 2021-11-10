import React, { useContext, useState } from "react"
import { ThemeContext } from '../ThemeContext'

const TodoItem = (props) => {

  const [{ isDark }] = useContext(ThemeContext);

  const [isClicked, setIsClicked] = useState(props.done); 
  
  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
  }

  return (
    <li className={`todo__item ${isDark? 'todo__item--dark' : 'todo__item--light'}`}>
      <div className={`todo__check ${props.done && 'todo__check--active'} ${isDark ? 'todo__check--dark' : 'todo__check--light'} ${(!isClicked && isDark) && 'todo__check--border--dark' } ${(!isClicked && !isDark) && 'todo__check--border--light' }`} onClick={() => {props.onDone(); toggleIsClicked()}}>
        <img className='todo__item--img' src="../assets/img/icon-check.svg" alt="icon-check" />
      </div>
      <p className={`todo__item--text ${props.done && 'todo__item--text--active'}`}>{props.text}</p>
      <span className='todo__item--delete' onClick={props.onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" ><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </span>
    </li>
  )
}

export { TodoItem }