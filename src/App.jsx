import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';

function App() {
  const { todos, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">📝 Todo List</h1>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
