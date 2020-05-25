import React from 'react'
import TodoListItem from './TodoListItem'
import todosData from "../data/todosData"

class TodoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const TodoListItems = this.state.todos.map(item => <TodoListItem handleChange= {this.handleChange} key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {TodoListItems}
            </div>
        )    
    }
}

export default TodoApp