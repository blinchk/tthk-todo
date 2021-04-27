const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require("./generateDate");
const app = express();

require('./models/db');

const routes = require('./routes/index');

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.use(routes);

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
