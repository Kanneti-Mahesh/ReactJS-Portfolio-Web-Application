const express = require('express');
const app=express();

const path = require('path')


app.get('/',(req,res)=>{
    res.send('Server')
})


app.use(express.static(path.join(__dirname,"./client/build")));



app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})




app.listen(8000,()=>{
    console.log('server is running...')
})