import TodoItem from './TodoItem';

function TodoList({ todos, onUpdate, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">🚫 Hozircha hech qanday vazifa yo‘q.</p>;
  }

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
