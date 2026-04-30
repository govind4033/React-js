import React, { useState } from 'react'
import { useTodo } from '../context'

function Todoitem({ todo }) {
  if (!todo) return null;

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const [isEditable, setisEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.title)

  const editTodo = () => {
    updateTodo(todo._id, todoMsg)
    setisEditable(false)
  }

  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg mb-2">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo._id)}
      />

      {isEditable ? (
          <input
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTodo();
              }
            }}
            className="mx-2 flex-1 px-2 py-1 rounded border"
          />
        ) : (
          <span className={`mx-2 flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.title}
          </span>
        )
      }

      <button
        onClick={() => isEditable ? editTodo() : setisEditable(true)}
        className="text-blue-500 mx-1 p-3"
      >
        {isEditable ? "💾" : "✏️"}
      </button>

      <button
        onClick={() => deleteTodo(todo._id)}
        className="text-red-500"
      >
        ❌
      </button>

    </div>
  )
}

export default Todoitem