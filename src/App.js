import React, { Component } from 'react';
import Form from './components/Form';
// import TodoList from './components/TodoList';

import './index.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться в React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  // todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // render() {
  //   const { todos } = this.state;

  //   const totalTodos = todos.length;
  //   const completedTodos = todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0
  //   );
  //   const notCompletedTodos = todos.reduce(
  //     (total, todo) => (todo.completed ? total : total + 1),
  //     0
  //   );

  //   return (
  //     <>
  //       <h1>Состояние компонента</h1>
  //       <div>
  //         <p>Общее количество Todo: {totalTodos}</p>
  //         <p>Количество выполненных: {completedTodos}</p>
  //         <p>Количество не выполненных: {notCompletedTodos}</p>
  //       </div>
  //       <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
  //     </>
  //   );
  // }
  render() {
    return <Form onSubmit={this.formSubmitHandler} />;
  }
}

export default App;
