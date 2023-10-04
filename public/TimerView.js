class Timerview {
    #timer
    #timerSpan
    
    constructor(timer, onStart, onPause) {
        this.#timer = timer

        this.#timerSpan = document.getElementById("timer");

        const startBtn = document.getElementById("startBtn");
        startBtn.addEventListener("click", onStart);
        const pauseBtn = document.getElementById("pauseBtn");
        pauseBtn.addEventListener("click", onPause);
    }

    update(pose) {
        this.#timerSpan.innerHTML = `<span class="pose-title">${pose.title}:</span> ${Math.floor(this.#timer.getTimeLeft() / 60)}:${String(this.#timer.getTimeLeft() % 60).padStart(2, "0")}`;

        this.#timerSpan.backgroundColor = pose.color;
    }
}


export default Timerview;