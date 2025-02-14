var express=require("express")
var app=express()
var fs=require("fs");

port=3007

app.get("/",(req,res)=>{
   fs.readFile('./api.json','utf-8',(err,data)=>
{
    if(err)
    {
        res.send("ERror")
    }
    else
    {
        res.send(data)
    }
})
})

app.listen(port,()=>{
    console.log("hi server is started")
})