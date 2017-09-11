if('webkitAudioContext' in window) {
  var audioContext = new webkitAudioContext();
} else if( new AudioContext() ){
  var audioContext = new AudioContext();
} else{
  console.log("web audio api not supported");
}


// inicializa audiocontext en ipad
if (audioContext.state === 'suspended') {
  var resume = function () {
    audioContext.resume();

    setTimeout(function () {
      if (audioContext.state === 'running') {
        document.body.removeEventListener('touchend', resume, false);
      }
    }, 0);
  };

  document.body.addEventListener('touchend', resume, false);
}



function impulseResponse(duration, decay, reverse) {
  var sampleRate = audioContext.sampleRate;
  var length = sampleRate * duration;
  var impulse = audioContext.createBuffer(2, length, sampleRate);
  var impulseL = impulse.getChannelData(0);
  var impulseR = impulse.getChannelData(1);

  if (!decay)
    decay = 2.0;
  for (var i = 0; i < length; i++) {
    var n = reverse ? length - i : i;
    impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
  }
  return impulse;
}


var impulseBuffer = impulseResponse(1, 1, false);







var notas = [
  130.8, 138.6, 146.8, 155.6, 164.8, 174.6, 185.0, 196.0, 207.7, 220.0, 233.1, 246.9,
  261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493,
  523.3, 554.4, 587.3, 622.3, 659.3, 698.5, 740.0, 784.0, 830.6, 880.0, 932.3, 987.8
]

function play(delay, pitch, duration) {
  var startTime = audioContext.currentTime + delay
  var endTime = startTime + duration

console.log("toca nota");
  // Make a convolver node for the impulse response.
  var convolver = audioContext.createConvolver();
  convolver.buffer = impulseBuffer;

  // Connect the graph.
  
  convolver.connect(audioContext.destination);






  var envelope = audioContext.createGain()
  //envelope.connect(audioContext.destination)
  envelope.connect(convolver);
  envelope.gain.value = 0
  envelope.gain.setTargetAtTime(1, startTime, 0.1)
  envelope.gain.setTargetAtTime(0, endTime, 0.2)




  var oscillator = audioContext.createOscillator()
  oscillator.connect(envelope)

  oscillator.type = 'sawtooth'
  oscillator.detune.value = pitch

  var vibrato = audioContext.createGain()
  vibrato.gain.value = 30
  vibrato.connect(oscillator.detune)

  var lfo = audioContext.createOscillator()
  lfo.connect(vibrato)
  lfo.frequency.value = 5

  lfo.start(startTime)
  lfo.stop(endTime + 2)

  oscillator.start(startTime)
  oscillator.stop(endTime + 2)
}
