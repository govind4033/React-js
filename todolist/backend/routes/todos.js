const express = require("express");
const { getAllTodos, addNewTask, updateTaskById, markTaskById, deleteTaskById } = require("../controller/todo-controller");
const router = express.Router();

router.get("/", getAllTodos);

router.post("/", addNewTask);

router.put("/:id", updateTaskById);

router.patch("/:id", markTaskById);

router.delete("/:id", deleteTaskById);

module.exports = router;