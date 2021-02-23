import React from "react";
import "./AudioAnalyser.scss";
// import {} from "./tape';

// SQ VENICE
import soundFile from './viper.mp3';
const initialTeasers = [
  soundFile,
];

const initialRecord = initialTeasers[0];

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

window.AudioContext = (function () {
  return (
    window.webkitAudioContext || window.AudioContext || window.mozAudioContext
  );
})();

export class AudioAnalyser extends React.Component {
  amplitudeArray = null;
  analyserNode = null;
  analyserRef = React.createRef();
  audioBuffer = null;
  audioContext = null;
  audioData = null;
  audioPaused = false;
  audioPausedAt = false;
  audioPlaying = false;
  audioStartedAt = null;
  audioStoppedAt = null;
  canvasColor = "FFFFFF";
  audioUrl = initialRecord;
  canvasContext = null;
  canvasHeight = 540;
  canvasWidth = 1620;
  javascriptNode = null;
  sampleSize = 1024;
  sourceNode = null;
  tsrItemIndex = 0;
  teasers = [...initialTeasers];
  state = {
    tsrId: 0,
    amplitudeArray: null,
    analyserNode: null,
    analyserRef: React.createRef(),
    audioBuffer: null,
    audioContext: null,
    audioData: null,
    audioPaused: false,
    audioPausedAt: false,
    audioPlaying: false,
    audioStartedAt: null,
    audioStoppedAt: null,
    canvasColor: "FFFFFF",
    audioUrl: null,
    canvasContext: null,
    canvasHeight: 540,
    canvasWidth: 1620,
    javascriptNode: null,
    sampleSize: 1024,
    sourceNode: null,
    tsrItemIndex: 0,
    teasers: [...initialTeasers],
  };

  componentDidMount() {
    this.setState({ audioUrl: this.audioUrl, audioData: this.audioData });
    try {
      this.canvasContext = this.analyserRef.current.getContext("2d");
      try {
        this.audioContext = new AudioContext();
      } catch (e) {
        alert("Web AudioContext setup malfunction");
      }
    } catch (e) {
      alert("Web Audio API is not supported in this browser");
    }
  }

  setupAudioNodes() {
    this.sourceNode = this.audioContext.createBufferSource();
    this.analyserNode = this.audioContext.createAnalyser();
    this.javascriptNode = this.audioContext.createScriptProcessor(
      this.sampleSize,
      1,
      1
    );

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
  loadSound = () => {
    var request = new XMLHttpRequest();
    request.open("GET", this.state.audioUrl, true);
    request.responseType = "arraybuffer";

    // When loaded, decode the data and play the sound
    request.onload = () => {
      this.audioContext.decodeAudioData(
        request.response,
        (buffer) => {
          this.setState({ audioData: buffer });
          this.playSound(buffer);
        },
        (e) => {
          console.log(e);
        }
      );
    };
    request.send();
  };

  // Play the audio and loop until stopped
  playSound(buffer) {
    this.sourceNode.buffer = buffer; // state
    this.sourceNode.start(0); // Play the sound now
    this.sourceNode.loop = true; // state
    this.audioPlaying = true;
    // state
  }

  onError(e) {
    console.log(e);
  }

  drawTimeDomain = () => {
    this.clearCanvas();
    for (var i = 0; i < this.amplitudeArray.length; i++) {
      var value = this.amplitudeArray[i] / 256;
      var y = this.canvasHeight - this.canvasHeight * value - 1;

      // Gradient Pattern
      // var gradient = this.canvasContext.createLinearGradient(0, 0, 0, 170);
      // gradient.addColorStop(0, "black");
      // gradient.addColorStop(1, "white");
      // this.canvasContext.fillStyle = gradient;

      this.canvasContext.fillStyle = "#ffffff";
      this.canvasContext.fillRect(i, y, 4, 1);
    }
  };

  clearCanvas = () => {
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  };

  startTape = (e) => {
    e.preventDefault();

    if (this.audioPlaying) {
      this.stopTape(e);
    }

    // Set up the audio Analyser, the Source Buffer and javascriptNode
    this.setupAudioNodes();

    // setup the event handler that is triggered every time enough samples have been collected
    // trigger the audio analysis and draw the results
    this.javascriptNode.onaudioprocess = () => {
      // get the Time Domain data for this sample
      this.analyserNode.getByteTimeDomainData(this.amplitudeArray);
      // draw the display if the audio is playing
      if (this.audioPlaying === true) {
        window.requestAnimFrame(this.drawTimeDomain);
      }
    };

    // Load the Audio the first time through, otherwise play it from the buffer
    if (this.audioData == null) {
      this.loadSound(this.state.audioUrl);
    } else {
      this.playSound(this.state.audioData);
    }
  };

  stopTape = (e) => {
    e.preventDefault();
    // this.changeChannel();
    // if (!!this.audioData) {
    this.sourceNode.stop(0);
    this.audioPlaying = false;
    this.audioStopped = true;
    // }

    // return;
  };

  prevTape = () => {
    this.setState((state, props) => {
      return {
        audioUrl: this.state.teasers[state.tsrId - 1],
        tsrId: state.tsrId - 1,
        audioUrlLoad: true,
      };
    });
  };

  nextTape = () => {
    this.setState((state, props) => {
      return {
        audioUrl: this.state.teasers[state.tsrId + 1],
        tsrId: state.tsrId + 1,
        audioUrlLoad: true,
      };
    });
  };

  firstTape = () => {
    this.setState((state, props) => {
      return {
        audioUrl: this.state.teasers[this.tsrItemIndex],
        tsrId: this.tsrItemIndex,
      };
    });
  };

  changeChannel = () => {
    this.setState({ audioUrl: this.state.teasers[this.tsrItemIndex] });
  };

  changePatternDown = () => {
    // "[AudioAnalyser]: changePatternDown -> this.state.tsrId",
    // "[AudioAnalyser]: changePatternDown -> initialTeasers.length",

    const cuttoff = this.state.tsrId < initialTeasers.length - 1;
    // "[LOG]: AudioAnalyser -> changePatternDown -> cuttoff",

    if (!cuttoff) {
      this.firstTape();
    }

    if (cuttoff) {
      this.nextTape();
    }
  };

  changePatternUp = () => {
    // "[AudioAnalyser]: changePatternDown -> this.state.tsrId",
    // "[AudioAnalyser]: changePatternDown -> initialTeasers.length",

    const cuttoff = this.state.tsrId > 0;
    // "[LOG]: AudioAnalyser -> changePatternDown -> cuttoff",

    if (!cuttoff) {
      this.firstTape();
    }

    if (cuttoff) {
      this.prevTape();
    }
  };

  render() {
    return (
      <div className="audio-analyser-container">
        <div className="audio-analyser">
          <canvas
            id="canvas"
            ref={this.analyserRef}
            width={this.canvasWidth}
            height={this.canvasHeight}
          />
          <div id="controls">
            <input
              type="button"
              id="change"
              onClick={this.changePatternUp}
              value="<"
            />
            <input
              type="button"
              id="start_button"
              onClick={this.startTape}
              value="Start"
            />
            <input
              type="button"
              id="stop_button"
              onClick={this.stopTape}
              value="Stop"
            />
            <input
              type="button"
              id="change"
              onClick={this.changePatternDown}
              value=">"
            />
            <p>{this.state.audioUrl}</p>
          </div>
        </div>
      </div>
    );
  }
}
