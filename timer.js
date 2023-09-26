const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const timer = document.getElementById("timer");
const poseList = document.getElementById("poseList");
const audio = new Audio('pong.wav');
const audio_30s = new Audio('30s.wav');
const audio_1m = new Audio('1m.wav');
const audio_2m = new Audio('2m.wav');
const audio_5m = new Audio('5m.wav');
const audio_7m = new Audio('7m.wav');
const audio_10m = new Audio('10m.wav');
const audio_5m_pause = new Audio('paus.wav');
const pauseColor = "#FFFFE0"
const runPoseColor = "#f0fff0"

const inputTimes = [
    { title: "30 sekunders pose", count: 100, duration: 1, color:  runPoseColor, audio: audio_30s },
    { title: "2 minut pose", count: 3, duration: 2 * 60, color:  runPoseColor, audio: audio_2m },
    { title: "7 minuter pose", count: 1, duration: 7 * 60, color: runPoseColor, audio: audio_7m },
    { title: "1 minut pose", count: 5, duration: 1 * 60, color:  runPoseColor, audio: audio_1m },
    { title: "1 minut pose", count: 5, duration: 1 * 60, color:  runPoseColor, audio: audio_1m },
    { title: "5 minuter paus", count: 1, duration: 5 * 60, color:  "#fff0f0", audio: audio_5m_pause },
    { title: "2 minut pose", count: 4, duration: 2 * 60, color:  runPoseColor, audio: audio_2m },
    { title: "5 minut pose", count: 1, duration: 5 * 60, color:  runPoseColor, audio: audio_5m },
];

let timerInterval;
let totalTime;
let currentTime;
let currentPose = -1;
let poses = [];

function generatePoses() {
    inputTimes.forEach((input) => {
        for (let i = 0; i < input.count; i++) {
            const indexInGroup = i + 1;
            poses.push({ 
                            title: `${input.title} (${indexInGroup} av ${input.count})`, 
                            duration: input.duration, 
                            color: input.color,
                            audio: input.audio
                        });
        }
    });

    poses.forEach((pose, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${pose.title} (${pose.duration} sek)`;
        li.id = `pose-${index}`;
        li.addEventListener("click", () => setCurrentPose(index));
        poseList.appendChild(li);
    });
}

function setCurrentPose(index) {

    let doStart = false

    //timer is running stop it
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null
        timer.style.backgroundColor = pauseColor;
    } else if (currentPose == index) { 
        //clicked on same pose as was already selected, if it is 
        doStart = true
    }

    currentPose = index;
    totalTime = poses[currentPose].duration;
    currentTime = totalTime;
    updateTimer();
    updatePoseList();

    if (doStart) {
        startTimer()
    }
}

function updateTimer() {
    timer.innerHTML = `<span class="pose-title">${poses[currentPose].title}:</span> ${Math.floor(currentTime / 60)}:${String(currentTime % 60).padStart(2, "0")}`;
    
    
}

function updatePoseList() {
    const poseItems = document.querySelectorAll(".pose-list li");
    poseItems.forEach((item, index) => {
        item.classList.toggle("active", index === currentPose);
    });
}

function makeCurrentPoseListItemGray() {
    const list = document.getElementById("poseList");
    const poseItems = document.querySelectorAll(".pose-list li");
    poseItems.forEach((item, index) => {
        if (index === currentPose) {
            item.classList.toggle("taken", index === currentPose);
           
            //list.scrollTop = (item.offsetTop - 1000);
            
        }
    });
}

function startTimer() {
    if (!timerInterval && currentTime > 0) {
        timer.style.backgroundColor = poses[currentPose].color;
        poses[currentPose].audio.play();
        timerInterval = setInterval(() => {
            
            currentTime--;
            updateTimer();

            if (currentTime <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                makeCurrentPoseListItemGray()
                
                if (currentPose < poses.length - 1) {
                    setCurrentPose(currentPose + 1);
                    startTimer();
                }
            }
        }, 1000);
    } else {
        console.log("startTimer", timerInterval, currentTime)
    }
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timer.style.backgroundColor = pauseColor;
  }
}



startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

generatePoses();
setCurrentPose(0);
