import React, { useState } from 'react'
import { useTodo } from '../context'

function Todoitem({ todo }) {
  if (!todo) return null;

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const [isEditable, setisEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.title)
  /*
    1 click edit button check isEditable = true
    2 then input field with prev data
    3 modify data and store in todoMsg
    4 when we press enter or save btn
    5 updateTodo api call
    6 we exit with esEditable = false
  */

    /* WHY i choose this
    ui-specific state isEditable only effect todoitem and todoMsg uses temporary input
    isEditable help managing two UI view modde and edit mode
    */
  const editTodo = () => {
    if (!todoMsg.trim()) return;
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

      {/* if editing: show input
          else: show normal text */}
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

      {/* save and edit button */}
      <button
        onClick={() => isEditable ? editTodo() : setisEditable(true)}
        className="text-blue-500 mx-1 p-3"
      >
        {isEditable ? "💾" : "✏️"}
      </button>

      {/* delete button */}
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