import { useState, useEffect } from 'react'
import './App.css'
import { TodolistProvider } from './context'
import TodoForm from './comp/Todoform'
import Todoitem from './comp/Todoitem'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://react-js-o9pt.onrender.com/todos");
      const data = await res.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    const res = await fetch("https://react-js-o9pt.onrender.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    });

    if (!res.ok) return;

    const data = await res.json();
    setTodos(prev => [...prev, data]);
  };

  const updateTodo = async (id, todo) => {
    const res = await fetch(`https://react-js-o9pt.onrender.com/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: todo.todo })
    });

    if (!res.ok) return;

    const updated = await res.json();

    setTodos(prev =>
      prev.map(key => key.id === id ? updated : key)
    );
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`https://react-js-o9pt.onrender.com/todos/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) return;

    setTodos(prev => prev.filter(key => key.id !== id));
  };

  const toggleComplete = async (id) => {
    const res = await fetch(`https://react-js-o9pt.onrender.com/todos/${id}`, {
      method: "PATCH"
    });

    if (!res.ok) return;

    const updated = await res.json();

    setTodos(prev =>
      prev.map(key => key.id === id ? updated : key)
    );
  };

  return (
    <TodolistProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen bg-gray-500 flex items-start justify-center px-4 py-10">
        <div className="bg-stone-300 rounded-2xl shadow-sm border border-stone-500 w-full max-w-200 p-8">

          <TodoForm />

          {
            todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo} />
              </div>
            ))
          }

        </div>
      </div>
    </TodolistProvider>
  )
}

export default App