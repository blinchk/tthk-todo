const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require("./generateDate");
const app = express();

let todoList = [];

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let dateToday = date.getDate();

    res.render("index.ejs", {
        dateFromServer: dateToday,
        todoItems: todoList
    });
});

app.post("/", (req, res) => {
    const todoItem = req.body.newTask;
    todoList.push(todoItem);
    res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
