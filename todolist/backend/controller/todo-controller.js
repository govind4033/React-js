const { todoModel } = require("../models");

//to get all task by get method 
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await todoModel.find();

        res.status(200).json({
        success: true,
        data: todos,
        message: "retrieved all tasks"
        });

    } catch (error) {
        res.status(404).json({
        success: false,
        message: "failed to fetch todos",
        });
    }
};

//to get task filtered by title
exports.getTaskByTitle = async(req, res) => {
    try {
        const { title } = req.query;

        //if title is empty
        if(!title){
            return res.status(400).json({
                success: false,
                data: title,
                message: "Title is required"
            })
        }

        const todos = await todoModel.find({title: { $regex: title, $options: "i" }});

        //if todo is empty we used length bacause of array data
        if (todos.length === 0) {
            return res.status(404).json({
                success: false,
                data: todos,
                message: "Todos not found"
            });
        }

        res.status(200).json({
            success: true,
            data: todos,
            message: "retrived all todos by matching title"
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "failed to fetch todos by title",
        });
    }
}

//to add new task
exports.addNewTask = async(req, res) => {
    try{
        const { title } = req.body;

        //to check title is empty if yes return 
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
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "failed to add task",
        });
    }
}

//to update any task by id
exports.updateTaskById = async(req, res) => {
    try{
        const {id} = req.params;
        const { title } = req.body;

        //to check title is empty
        if(!title){
            return res.status(400).json({
                success: false,
                data: title,
                message: "Title is required"
            })
        }

        const updated = await todoModel.findByIdAndUpdate(id, {title}, { new: true });

        //to check if task is in the data and updated or not
        if (!updated) {
            return res.status(404).json({
                success: false,
                data: updated,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updated,
            meassage: "Task updated successfully"
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "failed to update task",
        });
    }
}

//to mark completed true or false by id
exports.markTaskById = async (req, res) => {
    try{
        const { id } = req.params;
        const todo = await todoModel.findById(id);

        //to check that we founded the todo or not
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
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "failed to mark task",
        });
    }
};

//to delete any task by id
exports.deleteTaskById = async (req, res) => {
    try{
        const { id } = req.params;

        const deleted = await todoModel.findByIdAndDelete(id);

        //to check the task is founded and delelted ot not
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
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "failed to delete task",
        });
    }
};