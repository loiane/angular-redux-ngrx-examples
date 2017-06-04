export class Lesson {

    constructor(
        public $key:string,
        public name: string,
        public description: string,
        public duration: string,
        public url: string,
        public tags: string,
        public sourceCodeUrl: string,
        public videoUrl: string,
        public courseId: string
        ) {
    }

    static fromJson({$key, name, description, duration,
        url, tags, sourceCodeUrl, videoUrl, courseId}):Lesson {
        return new Lesson(
            $key, name, description, duration,
            url, tags, sourceCodeUrl, videoUrl, courseId
        );
    }

    static fromJsonList(array): Lesson[] {
        return array.map(Lesson.fromJson);
    }
}
