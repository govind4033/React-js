import { useState, useEffect } from 'react'
import './App.css'
import { TodolistProvider } from './context'
import TodoForm from './comp/Todoform'
import Todoitem from './comp/Todoitem'

// const BASE_URL = "https://react-js-o9pt.onrender.com";
const BASE_URL = "http://localhost:7007";

function App() {

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await fetch(`${BASE_URL}/todos`);
    const data = await res.json();
    setTodos(data.data || []);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (title) => {
    const res = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });

    const data = await res.json();

    const newTodo = data.data || data.message;

    setTodos([...todos, newTodo]);
  };


  const updateTodo = async (id, title) => {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    const updatedTodo = data.data || data;

    setTodos(
      todos.map((todo) =>
        todo._id === id ? updatedTodo : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const toggleComplete = async (id) => {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PATCH",
    });

    const data = await res.json();
    const updatedTodo = data.data || data;

    setTodos(
      todos.map((todo) =>
        todo._id === id ? updatedTodo : todo
      )
    );
  };

  return (
    <TodolistProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen bg-gray-500 flex items-start justify-center px-4 py-10">
        <div className="bg-stone-300 rounded-2xl shadow-sm border border-stone-500 w-full max-w-200 p-8">

          <TodoForm />

          {todos.map((todo) => (
            <Todoitem
              key={todo._id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}

        </div>
      </div>
    </TodolistProvider>
  )
}

export default App;