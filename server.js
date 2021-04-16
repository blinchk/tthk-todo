const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
})