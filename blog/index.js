const express = require("express");
const path = require("path");
const app = express();

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.get("/", async function(req, res, next) {
  res.render("posts", { posts: [{
    title: "Johan's playlist",
    description: "This is a simple description This is a simple descriptionThis is a simple description.",
    author: "Johan Avila Guerrero"
  }] });
});

// server
const server = app.listen(3000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});