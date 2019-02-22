import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';



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
    if (todo.content !== '') {
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
    }
  }

  render() {
    console.log(this.state.todos)
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>

          <h1 className="center blue-text">Nero's Todo Tracker</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
