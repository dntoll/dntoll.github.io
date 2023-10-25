

class Pose {
    title
    indexInGroup
    count
    duration
    color
    audio

    constructor(title, indexInGroup, count, duration, extraTime, color, audio) {
        this.title = title
        this.indexInGroup = indexInGroup
        this.count = count
        this.duration = duration
        this.extraTime = extraTime
        this.color = color
        this.audio = audio
    }


    timeString() {
        return `${Math.floor(this.duration / 60)}:${String(this.duration % 60).padStart(2, "0")}`;
    }
}

export default Pose;