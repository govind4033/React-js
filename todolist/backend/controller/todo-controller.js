const { todoModel } = require("../models");

exports.getAllTodos = async (req, res) => {
    const todos = await todoModel.find();

    res.status(200).json({
        success: true,
        data: todos,
        message: "retrieved all tasks"
    });
};

exports.getTaskByTitle = async(req, res) => {
    const { title } = req.query;

    if(!title){
        return res.status(400).json({
            success: false,
            data: title,
            message: "Title is required"
        })
    }

    const todos = await todoModel.find({title});

    if (todos.length === 0) {
        return res.status(404).json({
            success: false,
            data: todos,
            message: "Tasks not found"
        });
    }

    res.status(200).json({
        success: true,
        data: todos,
        message: "task founded"
    });
}

exports.addNewTask = async(req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            success: false,
            data: title,
            message: "Title is required"
        });
    }

    const todo = await todoModel.create({title});

    res.status(201).json({
        success: true,
        data: todo,
        meassage: "New task added successfully"
    })
}

exports.updateTaskById = async(req, res) => {
    const {id} = req.params;
    const { title } = req.body;

    if(!title){
        return res.status(400).json({
            success: false,
            data: title,
            message: "Title is required"
        })
    }

    const updated = await todoModel.findByIdAndUpdate(id, {title}, { new: true });

    if (!updated) {
        return res.status(404).json({
            success: false,
            data: updated,
            message: "Todo not found"
        });
    }

    res.status(200).json({
        success: true,
        data: updated,
        meassage: "Task updated successfully"
    });
}

exports.markTaskById = async (req, res) => {
  const { id } = req.params;

  const todo = await todoModel.findById(id);

  if (!todo) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "Todo not found"
    });
  }

  const updated = await todoModel.findByIdAndUpdate(id, { completed: !todo.completed }, { new: true });

  res.status(200).json({
    success: true,
    data: updated,
    message: "Task has been marked"
  });
};

exports.deleteTaskById = async (req, res) => {
  const { id } = req.params;

  const deleted = await todoModel.findByIdAndDelete(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Todo not found"
    });
  }

  res.status(200).json({
    success: true,
    data: deleted,
    message: "Todo deleted successfully"
  });
};