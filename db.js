const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:skafiskafnjak@server.8f37l.mongodb.net/?retryWrites=true&w=majority&appName=Server",  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
