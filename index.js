const express =require("express")

const books =require("./books.js")

const app =express()


app.get("",function (req,res){
    console.log("hello");
    res.send("hello")
})
app.get("/books",function (req,res){
    console.log("books");
    res.send(books)
})

app.listen(5001,()=>{
    console.log("Hello Mr.Shoaib Ahmed")
})