import express from 'express';

const app = express();

app.get('/me', (req, res) => {
    res.send("Hello, world! This is a new update?");
})

app.listen(8000, () => {
    console.log("started listening to server on port " + 8000);
    
})