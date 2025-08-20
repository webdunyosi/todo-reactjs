import { useState } from 'react';

function TodoItem({ todo, onUpdate, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (!newText.trim()) return;
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5"
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="text-green-600">Saqlash</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600 cursor-pointer">✏️</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-500 cursor-pointer">🗑️</button>
      </div>
    </li>
  );
}

export default TodoItem;
