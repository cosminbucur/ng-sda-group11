import { Role } from './role';
import { Signal } from './signal';

export class DemoEnums {

    public iterateEnum(): void {
        console.log('iterate enum:');

        for (const role in Role) {
            if (isNaN(Number(role))) {
                console.log(role);
            }
        }
    }

    public iterateEnumKeys() {
        console.log('iterate enum keys');
        Object.keys(Role)
            .filter(key => !isNaN(Number(Role[key])))
            .forEach(key => console.log(key));
    }

    public getKeysOfStringEnum(): void {
        console.log('iterate keys of string enum:');
        Object.keys(Signal).forEach(key => console.log(key));
    }
}