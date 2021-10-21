const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res, next) => {
  res.render("verification");
});
app.get("*", function (req, res) {
  res.redirect("https://sahclients.iteasyservices.com/");
});
module.exports = app;
