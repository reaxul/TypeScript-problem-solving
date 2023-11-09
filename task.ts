//problem-1
function stringOrNumber(param: string | number): number {
    if (typeof param === "string") {
        return param.length;
    } else {
        return param * param;
    }
}


//problem-2
interface Person {
    address?: {
        city: string;
        street: string;
    };
    phone?: string;
}

function getAddressCity(person: Person): string | undefined {
    return person?.address?.city;
}


//problem-3
class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

function isCat(obj: any): string | undefined {
    if (obj instanceof Cat) {
        return "yes, it's a cat.";
    } else {
        return "no, it's not a cat.";
    }
}


//problem-4
function sumNumbers(mixedData: (string | number)[]): number {
    let total = 0;
    for (const item of mixedData) {
        if (typeof item === 'number') {
            total += item as number;
        }
    }
    return total;
}


//problem-5
interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: string;
}

function combineCarAndDriver(car: Car, driver: Driver) {
    return {
        ...car,
        ...driver,
    };
}


//problem-6
function sumArrayNumbers(param: unknown): void {
    if (Array.isArray(param)) {
        const isArrayOfNumbers = param.every((item) => typeof item === 'number');
        if (isArrayOfNumbers) {
            const sum = param.reduce((acc, curr) => acc + curr, 0);
            console.log(`The sum of the numbers in the array is ${sum}.`);
        } else {
            console.error('Error: The parameter is not an array of numbers.');
        }
    } else {
        console.error('Error: The parameter is not an array.');
    }
}


//problem-7
function findFirstOccurrence<T>(arr: T[], val: T): number {
    const index = arr.indexOf(val);
    return index;
}

const numArr = [1, 2, 3, 4, 5,'3'];
const strArr = ['apple', 'mango', 'strawberry', 'pineapple'];
const boolArr = [true, false, true, true, false];

console.log(findFirstOccurrence(numArr, 3)); // Output: 2
console.log(findFirstOccurrence(strArr, 'mango')); // Output: 1
console.log(findFirstOccurrence(boolArr, false)); // Output: 1
console.log(findFirstOccurrence(numArr, 69)); // Output: -1


