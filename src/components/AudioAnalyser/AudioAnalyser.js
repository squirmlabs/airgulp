import React from 'react';
import './AudioAnalyser.scss';
import soundFile from './viper.mp3';
const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback, element) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
window.AudioContext = (function() {
  return window.webkitAudioContext || window.AudioContext || window.mozAudioContext;
})();

export class AudioAnalyser extends React.Component {
  constructor(props) {
    super(props);
    this.analyserRef = React.createRef();
  }
  ctx = null;
  audioContext = null;
  audioBuffer = null;
  sourceNode = null;
  analyserNode = null;
  javascriptNode = null;
  audiData = null;
  audioPlaying = false;
  sampleSize = 1024;
  amplitudeArray = null;
  audioUrl = soundFile;

  componentDidMount() {
    this.ctx = this.analyserRef.current.getContext('2d');
    try {
      this.audioContext = new AudioContext();
    } catch (e) {
      alert('Web Audio API is not supported in this browser');
    }
  }
  setupAudioNodes() {
    this.sourceNode = this.audioContext.createBufferSource();
    this.analyserNode = this.audioContext.createAnalyser();
    this.javascriptNode = this.audioContext.createScriptProcessor(this.sampleSize, 1, 1);
    // Create the array for the data values
    this.amplitudeArray = new Uint8Array(this.analyserNode.frequencyBinCount);
    // Now connect the nodes together
    this.sourceNode.connect(this.audioContext.destination);
    this.sourceNode.connect(this.analyserNode);
    this.analyserNode.connect(this.javascriptNode);
    this.javascriptNode.connect(this.audioContext.destination);
  }
  // Load the audio from the URL via Ajax and store it in global variable audioData
  // Note that the audio load is asynchronous
  loadSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    // When loaded, decode the data and play the sound
    request.onload = function() {
      this.audioContext.decodeAudioData(
        request.response,
        function(buffer) {
          this.audioData = buffer;
          this.playSound(this.audioData);
        },
        this.onError
      );
    };
    request.send();
  }
  // Play the audio and loop until stopped
  playSound(buffer) {
    this.sourceNode.buffer = buffer; // state
    this.sourceNode.start(0); // Play the sound now
    this.sourceNode.loop = true; // state
    this.audioPlaying = true; // state
  }
  onError(e) {
    console.log(e);
  }
  drawTimeDomain() {
    this.clearCanvas();
    for (var i = 0; i < this.amplitudeArray.length; i++) {
      var value = this.amplitudeArray[i] / 256;
      var y = this.canvasHeight - this.canvasHeight * value - 1;
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillRect(i, y, 1, 1);
    }
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
  startTape = (e) => {
    e.preventDefault();
    // Set up the audio Analyser, the Source Buffer and javascriptNode
    this.setupAudioNodes();
    // setup the event handler that is triggered every time enough samples have been collected
    // trigger the audio analysis and draw the results
    this.javascriptNode.onaudioprocess = function() {
      // get the Time Domain data for this sample
      this.analyserNode.getByteTimeDomainData(this.amplitudeArray);
      // draw the display if the audio is playing
      if (this.audioPlaying == true) {
        window.requestAnimFrame(this.drawTimeDomain);
      }
    };
    // Load the Audio the first time through, otherwise play it from the buffer
    if (this.audioData == null) {
      this.loadSound(this.audioUrl);
    } else {
      this.playSound(this.audioData);
    }
  };

  stopPlay = (e) => {
    e.preventDefault();
    this.sourceNode.stop(0);
    this.audioPlaying = false;
  };

  render() {
    return (
      <div className="audio-analyser-container">
        <div className="audio-analyser">
          <p id="controls">
            <input type="button" id="start_button" onClick={this.startTape} value="Start" />
            <input type="button" id="stop_button" onClick={this.stopTape} value="Stop" />
          </p>
          <canvas id="canvas" ref={this.analyserRef} width="512" height="256" />
        </div>
      </div>
    );
  }
}
