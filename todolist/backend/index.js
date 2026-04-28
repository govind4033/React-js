const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
    origin: [
    "http://localhost:5173",
    "https://friendly-mousse-c53720.netlify.app"
    ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

let nums = [];

app.get("/todos", (req, res) => {
    res.status(200).json(nums);
});

app.post("/todos", (req, res) => {
    const { todo } = req.body;

    if (!todo) {
        return res.status(400).json({ message: "Todo is required" });
    }

    const newTodo = {
        id: Date.now(),
        todo,
        completed: false
    };

    nums.push(newTodo);

    res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { todo } = req.body;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i].id === id) {
            nums[i].todo = todo;
            return res.status(200).json(nums[i]);
        }
    }

    res.status(404).json({ message: "Todo not found" });
});

app.patch("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i].id === id) {
            nums[i].completed = !nums[i].completed;
            return res.status(200).json(nums[i]);
        }
    }

    res.status(404).json({ message: "Todo not found" });
});

app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    const exists = nums.some(key => key.id === id);
    if (!exists) {
        return res.status(404).json({ message: "Todo not found" });
    }

    nums = nums.filter(key => key.id !== id);

    res.status(200).json({ message: "Deleted" });
});

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});