import { background } from '@chakra-ui/react';
import React from 'react'

function TodoItem({todo, onCompleta, onDeletedItem}) {
    const getStyle = () => {
        return {
            textDecoration: todo.completa ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #fff',
            backgroundColor: '#fff'
        }
    }
    return (
        <div style = {getStyle()}>
                <input type= 'checkbox' checked = {todo.completa}
                onChange= {()=> onCompleta(todo.id)}    
                />
                {todo.task}
                <button className = 'add-btn' onClick={() => onDeletedItem(todo.id)}>X</button>
        </div>
    )
}
export default TodoItem;