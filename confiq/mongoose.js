const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to database

mongoose.connect('mongodb+srv://ecom:ecom@cluster0.y6nubhu.mongodb.net/csv-upload?retryWrites=true&w=majority', { useNewUrlParser: true })
.then((e)=>console.log("Connected to Mongodb => ecom"))
.catch((e)=>console.log("Not Connected to db", e));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successful
db.once("open", () => {
  console.log("Data Base will Connected");
});

module.exports = db;
