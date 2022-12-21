import React from 'react'
import TodoItem from './TodoItem';
function TodoList({todos, onCompleta, onDeletedItem}) {
    return (
        <div>
            {
                todos.map((todo, index)=>(
                    <TodoItem key={`todo-${index}`} todo = {todo} onCompleta = {onCompleta} onDeletedItem = {onDeletedItem}/> 
                ))
            }
        </div>
    )
}
export default TodoList;