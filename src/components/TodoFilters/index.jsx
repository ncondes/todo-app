import React, { useContext } from "react"
import { ThemeContext } from "../ThemeContext";

const TodoFilters = (props) => {

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
  <div className={`todo__filters ${isDark? 'todo__filters--dark' : 'todo__filters--light'}`}>

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
  )
}

export { TodoFilters }