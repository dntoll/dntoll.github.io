import inputTimes from './inputTimes.js';
import Pose from './Pose.js';
import PoseTitle from './PoseTitle.js';


class PoseList {

    #poses = []
    #currentPose = 0

    constructor() {
        this.#generatePoses()
    }

    #generatePoses() {
        inputTimes.forEach((input) => {

            
            this.#poses.push(new PoseTitle(
                input.title, 
                input.count,
                input.duration, 
            ));

            for (let i = 0; i < input.count; i++) {
                const indexInGroup = i + 1;
                this.#poses.push(new Pose(
                                input.title,
                                indexInGroup,
                                input.count, 
                                input.duration, 
                                input.color,
                                input.audio
                            ));
            }
        });
    
        
    }

    setActive(activePose) {

        for (let i = 0; i < this.#poses.length; i++) {
            if (activePose == this.#poses[i]) {
                this.#currentPose = i
                return;
            }
        }
        
        throw new Error("Pose not found");
    }
/*
    getActivePosID() {
        return this.#currentPose
    }*/

    getPoses() {
        return this.#poses
    }

    getFirst() {
        this.#currentPose = 0
        if (this.#poses[this.#currentPose] instanceof PoseTitle) {
            this.#currentPose++
        }
        return this.#poses[this.#currentPose]
    }

    getActivePost() {
        if (this.#poses[this.#currentPose] instanceof PoseTitle) {
            this.#currentPose++
        }
        return this.#poses[this.#currentPose]
    }

    

    getNext() {
        this.#currentPose++
        if (this.#poses[this.#currentPose] instanceof PoseTitle) {
            this.#currentPose++
        }
        return this.#poses[this.#currentPose]
    }
}

export default PoseList;