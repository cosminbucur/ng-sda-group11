export class DemoFatArrow {

    public testFatArrow(): void {
        setTimeout(() => {
            console.log('setTimeout called');
        }, 1000);
    }

    public testFatArrowWithArguments(): void {
        // EC5
        var multiply = function (a, b) {
            return a * b;
        };

        // typescript
        const newMultiply = (a, b) => a * b;
        console.log(newMultiply);
    }
}
