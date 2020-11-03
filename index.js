const express = require('express');

const app = express();
app.use(express.json());

const port = 4444;

app.get('/',(req,res)=>{
    res.json({
        name: 'Miracle King',
        checking: 'Testing api'
    })
});



app.listen(port, ()=>{
    console.log(`${port} is active`);
});