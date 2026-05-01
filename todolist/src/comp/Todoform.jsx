import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {

  const [value, setValue] = useState("")

  const { addTodo, searchTodos, clearSearch, isSearching } = useTodo()

  const handleAdd = (e) => {
    e.preventDefault()
    if (!value) return;

    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleAdd} className="flex gap-2 mb-4">

      <input
        type="text"
        placeholder="Add or search todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border"
      />

      <button className="bg-gray-900 text-white px-3 py-2 rounded w-20">
        Add
      </button>

      <button
        type="button"
        onClick={() => searchTodos(value)}
        className="bg-blue-500 text-white px-3 py-2 rounded w-20"
      >
        Search
      </button>

      {isSearching && (
        <button
          type="button"
          onClick={() => {
            clearSearch(),
            setValue("")
          }}
          className="bg-red-500 text-white px-3 py-2 rounded w-20"
        >
          Clear
        </button>
      )}
    </form>
  )
}

export default TodoForm