const date = require("../generateDate");
const mongoose = require("mongoose");

const Task = mongoose.model("Task");

exports.getMainPage = (req, res) => {
  let dateToday = date.getDate();

  Task.find((err, tasks) => {
    if (!err) {
      res.render("index.ejs", {
        dateFromServer: dateToday,
        todoItems: tasks,
      });
    } else {
      console.log("Failed to retrieve data.");
    }
  });
};

exports.postNewItem = (req, res) => {
  const newTask = req.body.newTask;
  let newUserTask = new Task();
  newUserTask.description = newTask;
  
  newUserTask.save((err, res) => {
    if (!err) {
      res.redirect('/');
    } else {
      console.log(res);
    }
  })
}