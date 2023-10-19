

class PoseTitle {
    title
    count
    duration

    constructor( title, count, duration) {
        this.title = title
        this.count = count
        this.duration = duration
    }

    timeString() {
        return `${Math.floor(this.duration / 60)}:${String(this.duration % 60).padStart(2, "0")}`;
    }
}

export default PoseTitle;