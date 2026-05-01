const express = require("express");
const { getAllTodos, addNewTask, updateTaskById, markTaskById, deleteTaskById, getTaskByTitle } = require("../controller/todo-controller");
const router = express.Router();

//get method to get all task from database
router.get("/", getAllTodos);

//get method for search tasks by title
router.get("/search", getTaskByTitle);

//post method for creating or adding new task
router.post("/", addNewTask);

//put method for updating any task by id
router.put("/:id", updateTaskById);

//patch method is used bacuse we don't have to update full todo we just want to mark task by id
router.patch("/:id", markTaskById);

//put method for deleting any task by id
router.delete("/:id", deleteTaskById);

module.exports = router;