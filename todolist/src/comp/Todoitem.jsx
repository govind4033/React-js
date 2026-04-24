import React, { useState } from 'react'
import { useTodo } from '../context'

function Todoitem({ todo }) {

  const { updateTodo, deleteTodo, Togglecomplete } = useTodo()

  const [isEditable, setisEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setisEditable(false)
  }

  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg mb-2">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => Togglecomplete(todo.id)}
      />

      {
        isEditable ? (
          <input
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTodo();   // save on Enter
              }
            }}
            className="mx-2 flex-1 px-2 py-1 rounded border"
          />
        ) : (
          <span className={`mx-2 flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.todo}
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
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500"
      >
        ❌
      </button>

    </div>
  )
}

export default Todoitem