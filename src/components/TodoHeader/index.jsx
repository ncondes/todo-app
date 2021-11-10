import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const TodoHeader = () => {

  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className='todo__header'>
      <h1>TODO</h1>
      <img src={isDark? '../assets/img/icon-sun.svg' : '../assets/img/icon-moon.svg'} onClick={toggleTheme}></img>
    </div>
  )
}

export { TodoHeader }