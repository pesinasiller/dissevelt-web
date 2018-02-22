var socket = io.connect();

$('#setNick').click(function(e) {
    e.preventDefault();
    socket.emit('new user', {

        nick: $('#nickname').val(),
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        userAgent: navigator.userAgent

    }, function(data) {
        if (data) {
            $('#nickWrap').hide();
            $('.container-login').hide();
            $('#three-container').show();
        }
        else {
            $("#login-error").show();
        }
    });
    $('#nickname').val('');
});


$('#btn1').on("tap", function(e) {
    socket.emit('sendmessage', 60);
    console.log("envia mensaje");
});

socket.on('newmessage', function(data) {
    $('#chat').append('<b>' + data.nick + ":</b> " + data.msg + "<br/>");
    console.log("recibe mensaje: " + data.nick + " " + data.msg);
    remoteClick(data.msg);
    presionados.push(data);
});

var imagen_fondo;
socket.on('cambiarFondo', function(data) {
    imagen_fondo = data.fondo;
    cambiarFondo();
});
