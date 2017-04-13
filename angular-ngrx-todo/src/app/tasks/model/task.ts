export class Task {

    completed: boolean = false;
    id: string;
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}
