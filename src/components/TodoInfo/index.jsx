import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

const TodoInfo = (props) => {

  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className={`todo__info ${isDark ? 'todo__info--dark' : 'todo__info--light'}`}>
      <p className='items__left'>{props.todosLeft} items left</p>
      <span className='items__clear' onClick={props.clearTodos}>Clear Completed</span>
    </div>
  )
}

export { TodoInfo }