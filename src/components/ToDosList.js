
import React from "react"
import ToDoItem from "./ToDoItem"



class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
         <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    )
  }
}

export default TodosList
