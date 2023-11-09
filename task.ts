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
