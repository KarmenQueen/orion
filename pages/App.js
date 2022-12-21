import Layout from "../components/layout";
import { useState } from 'react';
import data from './data.json';
import TodoList from './TodoList.js';
import TodoForm from "./TodoForm";
function App() {

  const [todos , setTodos] = useState(data);

  const onCompleta = (id) => {
    
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completa: !todo.completa} : {...todo};}))
  }

  const addTodo = (newTodo) => {
    console.log('newTodo', newTodo);
    let newItem = {id : +new Date(), task: newTodo, completa: false};
  
    setTodos([...todos,newItem]);
  }
  
  const onDeletedItem = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id));
  }
  return (
    <div className="container2">
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos = {todos} onCompleta = {onCompleta} onDeletedItem = {onDeletedItem}/>
    </div>
  );
}

export default App;