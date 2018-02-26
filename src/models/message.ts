export class Message {
    constructor(
        public channel: string,
        public content: string,
        public from: string,
        public created: Date = null
    ) {
        if (!this.created) {
            this.created = new Date();
        }
    }
}