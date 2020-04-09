const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");

const routeUser = require("./routes/user");
const routeZone = require("./routes/zone");
const routeStar = require("./routes/star");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// require("./common/common.js").doInit();

app.use(express.static("./client/build"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/api/users", routeUser);
app.use("/api/zones", routeZone);
app.use("/api/stars", routeStar);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
