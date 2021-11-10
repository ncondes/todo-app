import React, { useContext } from 'react';
import { TodoHeader } from '../TodoHeader';
import { CreateTodo } from '../CreateTodo';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoInfo } from '../TodoInfo';
import { TodoFilters } from '../TodoFilters';
import { ThemeContext } from '../ThemeContext';
import { TodoTools } from '../TodoTools';

const TodoContainer = () => {

  // default array of todos for development
  const defaultTodos = [
    {
      text: 'Complete online JavaScript course',
      done: true,
    },
    {
      text: 'Jog around the park 3x',
      done: false,
    },
    {
      text: '10 minutes meditation',
      done: false,
    },
    {
      text: 'Read for 1 hour',
      done: false,
    },
    {
      text: 'Pick up groceries',
      done: false,
    },
    {
      text: 'Complete Todo App on Frontend Mentor',
      done: false,
    },
  ];

  // local storage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  // Conditional to check if the local storage is empty or not
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // set state of the todos array
  const [todos, setTodos] = React.useState(parsedTodos);

   // set state of displayed todos
   const [displayedTodos, setDisplayedTodos] = React.useState(todos);

  // Save Todos in localStorage
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
    setDisplayedTodos(newTodos);
  }

  // function for toggle todo.done
  const toggleDoneTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].done = !newTodos[todoIndex].done;
    // we changed setTodos for saveTodos because we already did it in the saveTodos function
    saveTodos(newTodos);
  }

  // function for delete todo
  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    // we changed setTodos for saveTodos because we already did it in the saveTodos function
    saveTodos(newTodos);
  }

  // search for done todos
  const completedTodos = todos.filter(todo => !!todo.done);
  const totalTodos = todos.length;
  const todosLeft = totalTodos - completedTodos.length;

  // function for delete completed todos
  const clearTodos = () => {
    const newTodos = todos.filter(todo => !todo.done);
    saveTodos(newTodos);
  }

  // function for add todos
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      done: false,
    });
    saveTodos(newTodos);
  }

  // function for filter all todos
  const filterAllTodos = () => {
    setDisplayedTodos(todos);
  }
 
  // function for filter active todos
  const filterActiveTodos = () => {
    const newTodos = todos.filter(todo => !todo.done);
    setDisplayedTodos(newTodos);
  }

  // function for filter completed todos
  const filterCompletedTodos = () => {
    setDisplayedTodos(completedTodos);
  }

  // useContext for toggle the theme
  const [{ isDark }] = useContext(ThemeContext);


  return(
    <div className={`background ${isDark ? 'background--dark' : 'background--light'}`}>
      <div className={`container`}>
        <TodoHeader />
        <CreateTodo
          addTodo={addTodo}
        />
        <TodoList>
          {displayedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              done={todo.done}
              onDone={() => toggleDoneTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          <TodoInfo
            todosLeft={todosLeft}
            clearTodos={() => clearTodos(completedTodos)}
          />
          <TodoTools
            todosLeft={todosLeft}
            clearTodos={() => clearTodos(completedTodos)}
            filterAllTodos={filterAllTodos}
            filterActiveTodos={filterActiveTodos}
            filterCompletedTodos={filterCompletedTodos}
          />
        </TodoList>
        <TodoFilters
          filterAllTodos={filterAllTodos}
          filterActiveTodos={filterActiveTodos}
          filterCompletedTodos={filterCompletedTodos}
        />
        {/* <p>Drag and drop to reorder list</p> */}
        <p>
          Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Nicolas Conde</a>.
        </p>
      </div>
    </div>
  )
}

export { TodoContainer }