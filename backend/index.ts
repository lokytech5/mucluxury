import express from 'express';

const app = express();

app.listen(8000, () => {
    console.log("started listening to server on port " + 8000);
    
})