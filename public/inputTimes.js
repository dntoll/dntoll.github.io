const audio = new Audio('resources/pong.wav');
const audio_30s = new Audio('resources/30s.wav');
const audio_1m = new Audio('resources/1m.wav');
const audio_2m = new Audio('resources/2m.wav');
const audio_5m = new Audio('resources/5m.wav');
const audio_7m = new Audio('resources/7m.wav');
const audio_10m = new Audio('resources/10m.wav');
const audio_5m_pause = new Audio('resources/paus.wav');
const pauseColor = "#FFFFE0"
const runPoseColor = "#f0fff0"


const inputTimes = [
    { title: "30 sekunders pose", count: 10, duration: 30, color:  runPoseColor, audio: audio_30s },
    { title: "2 minut pose", count: 3, duration: 2 * 60, color:  runPoseColor, audio: audio_2m },
    { title: "7 minuter pose", count: 1, duration: 7 * 60, color: runPoseColor, audio: audio_7m },
    { title: "1 minut pose", count: 5, duration: 1 * 60, color:  runPoseColor, audio: audio_1m },
    { title: "1 minut pose", count: 5, duration: 1 * 60, color:  runPoseColor, audio: audio_1m },
    { title: "5 minuter paus", count: 1, duration: 5 * 60, color:  "#fff0f0", audio: audio_5m_pause },
    { title: "2 minut pose", count: 4, duration: 2 * 60, color:  runPoseColor, audio: audio_2m },
    { title: "5 minut pose", count: 1, duration: 5 * 60, color:  runPoseColor, audio: audio_5m },
];

export default inputTimes;