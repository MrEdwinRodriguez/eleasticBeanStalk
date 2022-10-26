const express = require('express');
const app = express();

const PORT = process.env.PORT || 3010;
app.listen(PORT, (req, res) => {
    console.log(`We are listenting at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send(`This is the home page`);
})


app.get('/greeting', (req, res) => {
    res.send(`Welcome to this page!`);
})