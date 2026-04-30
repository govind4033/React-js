const express = require("express");
const cors = require("cors");
const DBconection = require("./database-connection")
require("dotenv").config();

DBconection()

const todoRoutes = require("./routes/todos")

const app = express();
app.use(express.json());

app.use(cors({
    origin: [
    "http://localhost:5173",
    "https://friendly-mousse-c53720.netlify.app"
    ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});