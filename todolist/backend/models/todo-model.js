const mongoose = require("mongoose");

const schema = mongoose.Schema;

const todoSchema = new schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("todo", todoSchema);