import React, { useContext } from "react"
import { ThemeContext } from "../ThemeContext";

const TodoTools = (props) => {

  const [{ isDark }] = useContext(ThemeContext)

  const [allActive, setAllActive] = React.useState(true);
  const [activeActive, setActiveActive] = React.useState(false);
  const [completedActive, setCompletedActive] = React.useState(false);

  const handleFiltersToggle = (state) => {
    if (state === 'allActive') {
      setAllActive(true);
      setActiveActive(false);
      setCompletedActive(false);
    } else if (state === 'activeActive') {
      setAllActive(false);
      setActiveActive(true);
      setCompletedActive(false);
    } else {
      setAllActive(false);
      setActiveActive(false);
      setCompletedActive(true);
    }
  }

  return (
    <div className={`todo__tools ${isDark? 'todo__tools--dark' : 'todo__tools--light'}`}>
      <p className={`items__left`}>{props.todosLeft} items left</p>
      <div>

        <span
          className={`todo__filter ${allActive ? 'todo__filter--active' : null}`}
          onClick={() => {props.filterAllTodos(); handleFiltersToggle('allActive');}}
        >All</span>

        <span
          className={`todo__filter ${activeActive ? 'todo__filter--active' : null}`}
          onClick={() => {props.filterActiveTodos(); handleFiltersToggle('activeActive');}}
        >Active</span>

        <span
          className={`todo__filter ${completedActive ? 'todo__filter--active' : null}`}
          onClick={() => {props.filterCompletedTodos(); handleFiltersToggle('completedActive');}}
        >Completed</span>
        
      </div>
      <span className='items__clear' onClick={props.clearTodos}>Clear Completed</span>
    </div>
  )
}

export { TodoTools }