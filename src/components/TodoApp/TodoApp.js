import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import todosData from '../../data/todosData.json';

class TodoApp extends Component {
  state = {
    todos: todosData,
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodos = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    const notCompletedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total : total + 1),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее количество Todo: {totalTodos}</p>
          <p>Количество выполненных: {completedTodos}</p>
          <p>Количество не выполненных: {notCompletedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default TodoApp;
