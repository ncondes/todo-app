import React, { useEffect, useState} from "react";


const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {

  // context for theme
  const [isDark, setIsDark] = React.useState(false);
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark))
    setIsDark(!isDark);
  }

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true';
    setIsDark(isDark)
  }, [])


  return (
    <ThemeContext.Provider value={[{ isDark }, toggleTheme]} >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }