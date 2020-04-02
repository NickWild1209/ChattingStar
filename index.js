const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

app.use(express.static("./client/build"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
