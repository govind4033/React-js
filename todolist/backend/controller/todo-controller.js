const { todoModel } = require("../models");

exports.getAllTodos = async (req, res) => {
    const todos = await todoModel.find();

    res.status(200).json({
        success: true,
        data: todos
    });
};

exports.addNewTask = async(req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }

    const todo = await todoModel.create({title});

    res.status(201).json({
        success: true,
        message: todo
    })
}

exports.updateTaskById = async(req, res) => {
    const {id} = req.params;
    const { title } = req.body;

    if(!title){
        return res.status(400).json({
            success: false,
            message: "Title is required"
        })
    }

    const updated = await todoModel.findByIdAndUpdate(id, {title}, {returnDocument: "after"});

    if (!updated) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }

    res.status(200).json({
        success: true,
        data: updated
    });
}

exports.markTaskById = async(req, res) => {
    const {id} = req.params;

    const todo = await todoModel.findById(id);
    
    if(!todo){
        return req.status(404).json({
            sucess:false,
            message: "Todo not found"
        })
    }

    const updated = await todoModel.findByIdAndUpdate(id, {completed: !todo.completed}, {returnDocument: "after"});

    res.status(200).json({
      success: true,
      data: updated
    });
}

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
    message: "Todo deleted successfully"
  });
};