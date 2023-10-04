class PoseListView {
 
    #poseList

    constructor(poseList, setCurrentPose) {
        const htmlPoseList = document.getElementById("poseList");
        this.#poseList = poseList

        this.#poseList.getPoses().forEach((pose, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${pose.title} (${pose.duration} sek)`;
            li.id = `pose-${index}`;
            li.pose = pose //we save the pose item here
            li.addEventListener("click", () => setCurrentPose(pose));
            htmlPoseList.appendChild(li);
        });
    }


    updatePoseList() {
        const poseItems = document.querySelectorAll(".pose-list li");
        poseItems.forEach((item, index) => {
            item.classList.toggle("active", item.pose === this.#poseList.getActivePost());
        });
    }
    

    
}

export default PoseListView;