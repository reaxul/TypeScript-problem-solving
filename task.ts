//problem-1
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

function stringOrNumber(param: string | number): number {
    if (typeof param === "string") {
        return param.length;
    } else {
        return param * param;
    }
}


//problem-2
//Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

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
//Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

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


// problem-4
// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find.If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

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
//Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

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
//Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.


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
//Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

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


//problem-8
//Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

interface Product {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotalCost(products: Product[]): number {
    let totalCost = 0;
    for (const product of products) {
        totalCost += product.price * product.quantity;
    }
    return totalCost;
}

const shoppingCart: Product[] = [
    { name: "Shirt", price: 200, quantity: 2 },
    { name: "Pants", price: 300, quantity: 1 },
    { name: "Shoes", price: 950, quantity: 1 },
];

const totalCost = calculateTotalCost(shoppingCart);
console.log(`The total cost of the items in the shopping cart is ${totalCost}.`);
