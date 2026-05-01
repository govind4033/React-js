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
  // storing error as string
  const [error, setError] = useState(null);

  const getTodos = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`${BASE_URL}/todos`);
      setTodos(res.data.data);
    } catch (err) {
      setError("cannot get todos");
    } finally {
      setLoading(false);
    }
  };

  // wrapping in useEffect so it will run only once
  useEffect(() => {
    getTodos();
  }, []);

  // search by title
  const searchTodos = async (title) => {
    if (!title.trim()) {
      // if input is empty then show prev all todos
      clearSearch();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`${BASE_URL}/todos/search?title=${title}`);
      
      // backend { success: true, data: [...], message: "whatever it is" }
      setSearchResults(res.data.data);
      setIsSearching(true);

    } catch (err) {
      setError("search is not work");
    }

    setLoading(false); // its common for both success and error
  };

  const clearSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
  };

  // show search results if searching, otherwise show prev all todos
  const displayTodos = isSearching ? searchResults : todos;

  const addTodo = async (title) => {
    setError(null);

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/todos`, { title });

      // add new one to prev array or list
      // i don't know the correct working of array and list in javascript but i have good knowledge in java
      setTodos([...todos, res.data.data]);

    } catch (err) {
      setError("add failed - check if title is valid");
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id, title) => {
    setError(null);

    try {
      setLoading(true);
      const res = await axios.put(`${BASE_URL}/todos/${id}`, { title });

      setTodos(todos.map((todo) => todo._id === id ? res.data.data : todo));

    } catch (err) {
      setError("update failed");
    }

    setLoading(false);
  };

  const deleteTodo = async (id) => {
    // i don't think delete need loading function because it's fast
    try {
      await axios.delete(`${BASE_URL}/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));

    } catch (err) {
      setError("delete failed");
    }
  };

  const toggleComplete = async (id) => {
    try {
      const res = await axios.patch(`${BASE_URL}/todos/${id}`);

      setTodos(todos.map((todo) => todo._id === id ? res.data.data : todo));

    } catch (err) {
      setError("status update failed");
    }
  };

  return (
    <TodolistProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete, searchTodos, clearSearch, isSearching }}>
      <div className="min-h-screen bg-gray-500 flex items-start justify-center px-4 py-10">
        <div className="bg-stone-300 rounded-2xl shadow-sm border border-stone-500 w-full max-w-200 p-8">

          <TodoForm />

          {/* showing both loading and error */}
          {loading && <p className="text-blue-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* only render array when not loading */}
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