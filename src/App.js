import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "play mario game"}
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random() * 10;
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Nero's Todo Tracker</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
