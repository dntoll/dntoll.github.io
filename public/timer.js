const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const timer = document.getElementById("timer");
const poseList = document.getElementById("poseList");


import inputTimes from './inputTimes.js';

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
