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

        if (this.#timer.hasExtraTime()) {
            this.#timerSpan.innerHTML = " - " + this.#getTimeString(this.#timer.getExtraTime());
            this.#timerSpan.style.backgroundColor = "#CCCCA0";
        } else {
            this.#timerSpan.innerHTML = this.#getTimeString(this.#timer.getTimeLeft());
            this.#timerSpan.style.backgroundColor = pose.color;
        }
        this.#posetitle.innerHTML = `${pose.title} ${pose.timeString()} (${pose.indexInGroup} av ${pose.count})`;

        
    }

    #getTimeString(timeLeft) {
        return `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`
    }
}


export default Timerview;