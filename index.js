const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send("Welcome to thdddddddddddddddde server!!!");
});

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});