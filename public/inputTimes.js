const audio = new Audio('resources/pong.wav');
const audio_30s = new Audio('resources/30s.wav');
const audio_1m = new Audio('resources/1m.wav');
const audio_2m = new Audio('resources/2m.wav');
const audio_3m = new Audio('resources/3m.wav');
const audio_5m = new Audio('resources/5m.wav');
const audio_7m = new Audio('resources/7m.wav');
const audio_10m = new Audio('resources/10m.wav');
const audio_pause = new Audio('resources/paus.wav');
const pauseColor = "#CCA0A0"
const runPoseColor = "#c0f0a0"
const runVolPoseColor = "#f0f0a0"


const inputTimes = [
    { title: "Posering", count: 1, duration: 5*60, color:  runPoseColor, audio: audio_5m },
    { title: "Posering", count: 8, duration: 60, color:  runPoseColor, audio: audio_1m },
    { title: "Posering", count: 1, duration: 7 * 60, color: runPoseColor, audio: audio_7m },

    { title: "Valfri posering", count: 1, duration: 7 * 60, color:  runVolPoseColor, audio: audio_7m },

    { title: "Rast", count: 1, duration: 3 * 60, color:  pauseColor, audio: audio_pause },
    { title: "Posering", count: 5, duration: 3 * 60, color:  runPoseColor, audio: audio_3m },
    { title: "Posering", count: 1, duration: 10 * 60, color:  runPoseColor, audio: audio_10m },
    { title: "Valfri posering", count: 1, duration: 5 * 60, color:  runVolPoseColor, audio: audio_5m },

    { title: "Rast", count: 1, duration: 15 * 60, color:  pauseColor, audio: audio_pause },

    { title: "Posering", count: 10, duration: 30, color:  runPoseColor, audio: audio_30s },
    { title: "Posering", count: 5, duration: 3 * 60, color:  runPoseColor, audio: audio_3m },
    { title: "Valfri posering", count: 1, duration: 2 * 60, color:  runVolPoseColor, audio: audio_2m },

    { title: "Rast", count: 1, duration: 3 * 60, color:  pauseColor, audio: audio_pause },
    { title: "Posering", count: 2, duration: 5 * 60, color:  runPoseColor, audio: audio_5m },
    { title: "Posering", count: 5, duration: 2 * 60, color:  runPoseColor, audio: audio_2m },
    
];

export default inputTimes;