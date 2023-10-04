class Timer {
    constructor(callbackTick, callbackDone) {
        this.callbackTick = callbackTick;
        this.callbackDone = callbackDone;
        this.interval = 1000;
        this.timerId = null;
        this.isRunning = false;
        this.elapsedTime = 0;
        this.maxTime = 0;
    }

    getElapsedTimeSeconds() {
        return this.elapsedTime/1000
    }

    getTimeLeft() {
        return (this.maxTime - this.elapsedTime)/1000
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timerId = setInterval(() => {
                this.#onInterval();
            }, this.interval);
        }
    }

    #onInterval() {
        this.elapsedTime += this.interval;
        if (this.elapsedTime > this.maxTime) {
            this.callbackDone(this.elapsedTime);
            
        } else {
            this.callbackTick(this.elapsedTime);
        }
    }

    pause() {
        if (this.isRunning) {
            clearInterval(this.timerId);
            this.isRunning = false;
        }
    }

    reset(pose) {
        this.maxTime = pose.duration * 1000 //duration is in seconds and elapsedTime in milliseconds
        this.elapsedTime = 0;
    }

    isStarted() {
        return this.isRunning;
    }
}

export default Timer;