class Timerview {
    #timer
    #timerSpan
    #posetitle
    
    constructor(timer, onStart, onPause) {
        this.#timer = timer

        this.#timerSpan = document.getElementById("timer");
        this.#posetitle = document.getElementById("posetitle");
        

        const startBtn = document.getElementById("startBtn");
        startBtn.addEventListener("click", onStart);
        const pauseBtn = document.getElementById("pauseBtn");
        pauseBtn.addEventListener("click", onPause);
    }

    update(pose) {
        this.#timerSpan.innerHTML = `${Math.floor(this.#timer.getTimeLeft() / 60)}:${String(this.#timer.getTimeLeft() % 60).padStart(2, "0")}`;
        this.#posetitle.innerHTML = `${pose.title} ${pose.timeString()} (${pose.indexInGroup} av ${pose.count})`;

        this.#timerSpan.backgroundColor = pose.color;
    }
}


export default Timerview;