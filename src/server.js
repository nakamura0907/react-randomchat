const express = require("express")
const app = express()
const server = require('http').createServer(app)
const portNo = 3001
server.listen(process.env.PORT || portNo, () => {
    console.log("起動しました", "http://localhost:" + portNo)
})
app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect(302, "/public")
})

const socketio = require("socket.io")
const io = socketio.listen(server)

io.on("connection", (socket) => {
    socket.emit("count",socket.client.conn.server.clientsCount)
    socket.on("chat", (msg) => {
        msg.id = socket.client.id;
        socket.broadcast.emit("chat", msg)
    })
})