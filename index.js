const express = require('express');
const app = express();
const SERVER_PORT = 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

// http://localhost:3000/about
app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express JS!</h1>');
});

// Query String Parameters
// http://localhost:3000/user?firstname=Nicholas&lastname=Chiarello
app.get('/user', (req, res) => {
    console.log(req.query);
    let firstname = req.query.firstname || "Pritesh"
    let lastname = req.query.lastname || "Patel"

    res.json({ firstname, lastname });
})

// Path Parameters
// http://localhost:3000/user/Nicholas/Chiarello
app.post('/user/:firstname/:lastname', (req, res) => {
    let firstname = req.params.firstname
    let lastname = req.params.lastname

    res.json({ firstname, lastname });
})

// http://localhost:3000/all
app.get('/all', (req, res) => {
    res.json(req.headers);
    // res.send('<h1>All Records</h1>');
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})