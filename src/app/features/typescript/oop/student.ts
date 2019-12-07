import { Person } from './person';

export class Student extends Person {
    course;

    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }

    whoAreAreYou(): string {
        return `${super.whoAreAreYou} and I'm studying Angular`;
    }
}
