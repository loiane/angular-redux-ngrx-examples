export class Course {

    constructor(
        public $key: string,
        public url: string,
        public name: string,
        public description: string,
        public thumbnail: string) {
    }

    static fromJson({$key, url, name, description, thumbnail}) {
        return new Course($key, url, name, description, thumbnail);
    }

    static fromJsonArray(json: any[]): Course[] {
        return json.map(Course.fromJson);
    }

}
