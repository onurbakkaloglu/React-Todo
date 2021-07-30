import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
    return (
        <div className="todo-list">
            {
                todos && todos.map(todo => (
                    <Todo key={Todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodoList
