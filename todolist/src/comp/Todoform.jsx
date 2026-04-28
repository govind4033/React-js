import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {

  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return;

    addTodo({ todo })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Your wish is my command, my master 🧞‍♂️"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-gray-400 focus:bg-white transition"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="w-11 h-11 rounded-xl bg-gray-900 text-white text-xl flex items-center justify-center hover:bg-gray-700 transition">
        +
      </button>
    </form>
  )
}

export default TodoForm