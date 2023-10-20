import PoseTitle from './PoseTitle.js';

class PoseListView {
 
    #poseList

    constructor(poseList, setCurrentPose) {
        const htmlPoseList = document.getElementById("poseList");
        this.#poseList = poseList

        let lastPoseTitle

        this.#poseList.getPoses().forEach((pose, index) => {
            
            if (pose instanceof PoseTitle) {
                const li = document.createElement("li");
                li.innerHTML = `${pose.count} st ${pose.title} - ${pose.timeString()}`;
                li.className = "ListPoseTitle"
                htmlPoseList.appendChild(li);
                lastPoseTitle = li
            } else {
                const li = document.createElement("li");
                li.innerHTML = `${pose.title} ${pose.timeString()}`;
                li.id = `pose-${index}`;
                li.pose = pose //we save the pose item here
                li.lastPoseTitle = lastPoseTitle
                li.addEventListener("click", () => setCurrentPose(pose));
                htmlPoseList.appendChild(li);
            }
        });
    }


    updatePoseList() {
        const poseItems = document.querySelectorAll(".pose-list li");
        poseItems.forEach((item, index) => {
            item.classList.toggle("active", item.pose === this.#poseList.getActivePost());

            if (item.pose === this.#poseList.getActivePost()) {
                item.lastPoseTitle.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
    

    
}

export default PoseListView;