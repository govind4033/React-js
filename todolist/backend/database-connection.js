const mongoose = require("mongoose");

function DBconection() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = DBconection;