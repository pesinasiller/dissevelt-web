var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    nicknames = {};
     
    
app.use(express.static(path.join(__dirname, 'public')));

//server.listen(8000);
server.listen(process.env.PORT, process.env.IP);
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function(socket) {
    
    socket.on('sendmessage', function(data) {
        io.sockets.emit('newmessage', { msg: data, nick: socket.nickname });
    });


    socket.on('new user', function(data, callback) {
        if (data.nick in nicknames) {
            callback(false);
        }
        else {
            callback(true);
            socket.nickname = data.nick;
            nicknames[socket.nickname] = data;
            updateNickNames();
        }
    });


    socket.on('disconnect', function(data) {
        if (!socket.nickname) return;
        delete nicknames[socket.nickname];
        updateNickNames();
    });

    function updateNickNames() {
        io.sockets.emit('usernames', nicknames);
    }
});
