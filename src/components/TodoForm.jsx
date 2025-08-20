import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yangi vazifa kiriting..."
        className="flex-grow p-3 rounded-xl border border-blue-300 focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
        Qo‘shish
      </button>
    </form>
  );
}

export default TodoForm;
