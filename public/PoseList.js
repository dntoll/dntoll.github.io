import inputTimes from './inputTimes.js';
import Pose from './Pose.js';


class PoseList {

    #poses = []
    #currentPose = 0

    constructor() {
        this.#generatePoses()
    }

    #generatePoses() {
        inputTimes.forEach((input) => {
            for (let i = 0; i < input.count; i++) {
                const indexInGroup = i + 1;
                this.#poses.push(new Pose(
                                `${input.title} (${indexInGroup} av ${input.count})`, 
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
        return this.#poses[this.#currentPose]
    }

    getActivePost() {
        return this.#poses[this.#currentPose]
    }

    

    getNext() {
        this.#currentPose++
        return this.#poses[this.#currentPose]
    }
}

export default PoseList;