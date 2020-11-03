const express = require('express');
const mainBase = require('./config/myBase');

mainBase();

const app = express();
app.use(express.json());

const port = 4444;

//Importing files from bot data
const userRouter = require('./routes/route');

app.use('/user', userRouter);


// app.get('/',(req,res)=>{
//     res.json({
//         name: 'Miracle King',
//         checking: 'Testing api'
//     })
// });



app.listen(port, ()=>{
    console.log(`${port} is active`);
});