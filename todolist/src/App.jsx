import { useState, useEffect } from 'react'
import './App.css'
import { TodolistProvider } from './context'
import TodoForm from './comp/Todoform'
import Todoitem from './comp/Todoitem'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {

  const [todos, setTodos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${BASE_URL}/todos`);
      setTodos(res.data.data);

    } catch (err) {
      setError("failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const searchTodos = async (title) => {
    if (!title) {
      clearSearch();
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${BASE_URL}/todos/search?title=${title}`);

      if (res.data.success) {
        setSearchResults(res.data.data);
      } else {
        setSearchResults([]);
      }
      setIsSearching(true);

    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
  };

  const displayTodos = isSearching ? searchResults : todos;

  const addTodo = async (title) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(`${BASE_URL}/todos`, {title});
      setTodos([...todos, res.data.data]);

    } catch (err) {
      setError("Failed to add todo");
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id, title) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.put(`${BASE_URL}/todos/${id}`, { title });
      setTodos(
        todos.map((todo) =>
          todo._id === id ? res.data.data : todo
        )
      );

    } catch (err) {
      setError("Failed to update todo");
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await axios.delete(`${BASE_URL}/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));

    } catch (err) {
      setError("Failed to delete todo");
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.patch(`${BASE_URL}/todos/${id}`);
      setTodos(
        todos.map((todo) =>
          todo._id === id ? res.data.data : todo
        )
      );

    } catch (err) {
      setError("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TodolistProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete, searchTodos, clearSearch, isSearching }}>
      <div className="min-h-screen bg-gray-500 flex items-start justify-center px-4 py-10">
        <div className="bg-stone-300 rounded-2xl shadow-sm border border-stone-500 w-full max-w-200 p-8">

          <TodoForm />

          {loading && <p className="text-blue-500">Loading...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!loading && displayTodos.map((todo) => (
            <Todoitem
              key={todo._id}
              todo={todo}
            />
          ))}

        </div>
      </div>
    </TodolistProvider>
  )
}

export default App;