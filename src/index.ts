import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Server working");
});

app.listen(port, ()=> {
    console.log(`The server started at http://localhost:${port}`);
});