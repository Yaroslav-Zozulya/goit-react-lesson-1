import TodoApp from './components/TodoApp';

import './index.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  return (
    <>
      <TodoApp />
    </>
  );
};

// class App extends Component {
// state = {
//   todos: todosData,
// };

// formSubmitHandler = data => {
//   setTimeout(() => {
//     console.log(data);
//   }, 2000);
// };

// deleteTodo = todoId => {
//   this.setState(prevState => ({
//     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   }));
// };

// render() {
// const { todos } = this.state;

// const totalTodos = todos.length;
// const completedTodos = todos.reduce(
//   (total, todo) => (todo.completed ? total + 1 : total),
//   0
// );
// const notCompletedTodos = todos.reduce(
//   (total, todo) => (todo.completed ? total : total + 1),
//   0
// );

// return (
//   <>
//     <TodoApp />
//   </>
// );
// }
// render() {
//   return <Form onSubmit={this.formSubmitHandler} />;
// }
// }

export default App;
