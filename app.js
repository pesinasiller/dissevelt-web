var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    nicknames = {};

var imagen_fondo = { fondo: "img/fondos/patioMAZ.jpg" };

app.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT, process.env.IP);
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/fondo', function(req, res) {
    res.json(imagen_fondo);
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

    socket.on('botonCambiarFondo', function(data) {
        imagen_fondo.fondo = data.fondo;
        io.sockets.emit('cambiarFondo', { fondo: imagen_fondo.fondo });
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
