 const express = require("express")
const http = require('http')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;
const server = http.createServer(app)
const socketIO = require('socket.io')
const moment = require('moment')
// expres socket.io http moment 

const io = socketIO(server);

app.use(express.static(path.join(__dirname,"src")))



io.on("connection",(socket)=>{
    socket.on("chatID",(data)=>{
        const { name, msg } = data;
        io.emit("chatID", {
            name : name,
            msg : msg,
            time : moment(new Date()).format("h:ss A")
        })
    })
})

server.listen(3000,()=>{
    console.log(`server is running ${PORT}`)
})