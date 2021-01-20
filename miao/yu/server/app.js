var express=require("express");
var app=express();
app.use("/list",(res)=>{
    res.send("来哦了")
})
app.listen("1110",(res)=>{
    console.log("启动了0....")
})
app.use( express.static('../public') );
