const mongoose = require("mongoose");
const mongoPath = "mongodb://localhost:27017/myTODO";

mongoose.connect(mongoPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require('./task');
