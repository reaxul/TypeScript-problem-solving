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
