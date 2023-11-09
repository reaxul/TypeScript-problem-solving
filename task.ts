//problem-1
function stringOrNumber(param: string | number): number {
    if (typeof param === "string") {
        return param.length;
    } else {
        return param * param;
    }
}


