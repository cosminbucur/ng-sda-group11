export class DemoObjectDestructuring {

    public objectDestructuring(): void {
        const jon = {
            firstName: 'Jon',
            lastName: 'Snow',
            age: 35
        };

        // EC5
        const firstName = jon.firstName;
        console.log(firstName);

        // ES6
        const {
            firstName: destructuredFirstName,
            lastName: destructuredLastName
        } = jon;
        console.log(destructuredLastName);
    }
}
