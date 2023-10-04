import PoseList from './PoseList.js';
import Timer from './Timer.js';
import TimerView from './TimerView.js';
import PoseListView from './PoseListView.js';

class TimerController {
    #poseList
    #timer
    #timerView
    #poseListView
    #activePose
    
    
    constructor() {
        this.#poseList = new PoseList();
        this.#timer = new Timer(this.#onCallbackTick.bind(this), this.#onCallbackDone.bind(this))
        this.#timerView = new TimerView(this.#timer, this.onStart.bind(this), this.onPause.bind(this))
        this.#poseListView = new PoseListView(this.#poseList, this.onSelectPose.bind(this))
        this.#timer.reset(this.#poseList.getActivePost())
        this.#timerView.update(this.#poseList.getActivePost())
        this.#poseListView.updatePoseList();
    }

    onStart() {
        if (this.#timer.isStarted() == false) {
            this.#timer.start()
        } else {
            this.#timer.pause()
        }
    }

    onPause() {
        this.#timer.pause()
    }

    onSelectPose(newPose) {

        const wasStarted =  this.#timer.isStarted()
        this.#poseList.setActive(newPose)

        this.#timer.reset(this.#poseList.getActivePost())
        if (wasStarted) {
            this.#timer.start()
        }

        this.#poseListView.updatePoseList();
        this.#timerView.update(this.#poseList.getActivePost())
    }

    #onCallbackDone() {
        try {
            const pose = this.#poseList.getNext()
            this.onSelectPose(pose)
            this.#poseListView.updatePoseList();
        } catch (error) {
            console.log(error)
            this.#timer.pause()
        }
    }

    #onCallbackTick() {
        this.#timerView.update(this.#poseList.getActivePost());
    }
}

export default TimerController;