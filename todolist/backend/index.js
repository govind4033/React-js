const express = require("express");
const cors = require("cors");
const DBconection = require("./database-connection")
const dotenv = require("dotenv")
const todoRoutes = require("./routes/todos")
const app = express();

//dotenv for accessing mongo url and port no
dotenv.config();

//db connection method which is imported from database-connection folder where connection in establish
DBconection()

app.use(express.json());

app.use(cors({
    origin: [
    "http://localhost:5173",
    "https://friendly-mousse-c53720.netlify.app"
    ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

// to load routes
app.use("/todos", todoRoutes);

//port used from .env file
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port no: " + PORT);
});