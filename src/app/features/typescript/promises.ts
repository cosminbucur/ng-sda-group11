export class DemoPromisses {

    public testSuccessPromise() {
        const promise = new Promise((resolve, reject) => {
            resolve(123);
        });

        promise.then(res => {
            console.log('i got called ', res === 123);
        });
        promise.catch(err => {
            // never called
        });
    }

    public testErrorPromise() {
        const promise = new Promise((resolve, reject) => {
            reject(new Error('Something awful happened'));
        });

        promise.then(res => {
            // never called
        });
        promise.catch(err => {
            console.log('i got called ', err.message);
        });
    }

    public promiseChainability(): void {
        // create a resolved promise
        Promise.resolve(123)
            .then(res => {
                console.log(res);   // 123
                return 456;
            })
            .then(res => {
                console.log(res);   // 456
                // return a new resolved promise
                return Promise.resolve(333);
            })
            .then(res => {
                console.log(res);   // 333
                return 444;
            });
    }

    public promiseErrorHandling() {
        Promise.reject(new Error('something bad happened'))
            .then(res => {
                console.log(res);
                return 456;
            })
            .then(res => {
                console.log(res);
                return 123;
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    public promiseInTypescript(): void {
        Promise.resolve(123)
            // promise as a number
            .then(res => {
                console.log('type of res = ' + typeof res);
                return true;
            })
            // promise as a boolean
            .then(res => {
                console.log('type of res = ' + typeof res);
            });
    }
}
