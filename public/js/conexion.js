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




//emite mensaje
$('#btn1').on("tap", function(e) {
    socket.emit('sendmessage', 60);
    console.log("envia mensaje");
});
//            $('#btn1').on("click", function(e) { socket.emit('send message', 60); });



//recibe mensaje
socket.on('newmessage', function(data) {
    $('#chat').append('<b>' + data.nick + ":</b> " + data.msg + "<br/>");
    console.log("recibe mensaje: " + data.nick + " " + data.msg);
    remoteClick(data.msg);
    presionados.push(data);
    //sendMiddleC(midi, 1, data.msg);
    //  sendMiddleC(midi, 1, 64);
});

/*
socket.on('usernames', function(data) {

    var html = '';
    for (var username in data) {
        console.log(username);
        html += username + '<br/>';
    }
});
*/






/* ------------------------ MIDI ---------------------*/

/*
        // inicializa midi

        var midi = null; // global MIDIAccess object

        function onMIDISuccess(midiAccess) {
            console.log("MIDI ready!");
            midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
        }

        function onMIDIFailure(msg) {
            console.log("Failed to get MIDI access - " + msg);
        }

        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);



        //tocar nota MIDI
        function sendMiddleC(midiAccess, portID, note) {
            var noteOnMessage = [0x90, note, 0x7f]; // note on, middle C, full velocity
            var output = midiAccess.outputs.get(portID);
            output.send(noteOnMessage); //omitting the timestamp means send immediately.
            output.send([0x80, note, 0x40], window.performance.now() + 1000.0); //apagar
        }
*/
/*
function stopMiddleC(midiAccess, portID) {
    var output = midiAccess.outputs.get(portID);
    output.send([0x80, 60, 0x40], window.performance.now() + 1000.0); // Inlined array creation- note off, middle C,  
    // release velocity = 64, timestamp = now + 1000ms.
    output.send([0x80, 61, 0x40], window.performance.now() + 1000.0);
}
*/
