const express=require('express')
const server=express()
server.get('/',(req,res)=>{
    res.send('<h1>Cada vez mas cerca!</h1>')
})
server.listen(666,()=>{
    console.log('PORT 666 ON')
})