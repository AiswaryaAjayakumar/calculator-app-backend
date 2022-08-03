const bodyParser = require('body-parser')
var express = require('express')
var mongoose= require('mongoose')
var firstno,secondno,result


var app= express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME TO CALCULATOR APP")
})
app.post('/add',(req,res)=>{

   var getNum1=parseFloat(req.body.firstno)
   var getNum2=parseFloat(req.body.secondno)
   var result=(getNum1+getNum2)
   res.json({'result':result})

})
app.post('/sub',(req,res)=>{
    var getNum1=parseFloat(req.body.firstno)
   var getNum2=parseFloat(req.body.secondno)
   var result=getNum1-getNum2
   res.json({'result':result})
})
app.post('/mul',(req,res)=>{
    var getNum1=parseFloat(req.body.firstno)
   var getNum2=parseFloat(req.body.secondno)
   var result=(getNum1*getNum2)
   res.json({'result':result})
})
app.post('/div',(req,res)=>{
    var getNum1=parseFloat(req.body.firstno)
   var getNum2=parseFloat(req.body.secondno)
   var result=(getNum1/getNum2)
   res.json({'result':result}) 
})
app.listen(process.env.PORT||3005,()=>{
    console.log("Server started at http://localhost:3005/")
})