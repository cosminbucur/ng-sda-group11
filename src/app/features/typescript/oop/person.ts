import { Human } from './human';

export class Person implements Human {
    firstName = '';
    lastName = '';

    constructor(firstName: string, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // constructor(private firstName, private lastName) { }

    public name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public whoAreAreYou(): any {
        return `Hi I'm ${this.name()}`;
    }
}
