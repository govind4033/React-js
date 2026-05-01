const mongoose = require("mongoose");

const schema = mongoose.Schema;

//this is the schema format structure which tells the json info is going to like this

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