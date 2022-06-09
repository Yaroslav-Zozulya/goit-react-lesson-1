import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.TodoListItem}>
        <p className={s.TodoListText}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
