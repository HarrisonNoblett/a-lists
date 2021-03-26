// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Port
const PORT = process.env.PORT || 3001;

// Setting Up Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes)

// Connection to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/alists");

// Set up start for the API server
app.listen(PORT, function() {
    console.log(`http:localhost:${PORT}!`);
  });
  
