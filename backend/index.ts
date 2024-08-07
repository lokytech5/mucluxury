import express from 'express';

const app = express();

app.get('/api', (req, res) => {
    res.send("Hello, world!");
})

app.listen(8000, () => {
    console.log("started listening to server on port " + 8000);
    
})