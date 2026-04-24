import { useState, useEffect } from 'react'
import './App.css'
import { TodolistProvider } from './context'
import TodoForm from './comp/Todoform'
import Todoitem from './comp/Todoitem'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((key) =>
      key.id === id ? { ...key, ...todo } : key
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((key) => key.id !== id))
  }

  const Togglecomplete = (id) => {
    setTodos((prev) => prev.map((key) =>
      key.id === id ? { ...key, completed: !key.completed } : key
    ))
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodolistProvider value={{ todos, addTodo, updateTodo, deleteTodo, Togglecomplete }}>
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