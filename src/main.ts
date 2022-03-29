export function fizzbuzz(x: number): string {
    let result = "";
    if (containsNumber(x, 3) || isDivisibleBy(x, 3)) {
        result += "fizz";
    }
    if (containsNumber(x, 5) || isDivisibleBy(x, 5)) {
        result += "buzz";
    }
    if (result === "") {
        return x.toString();
    }
    return result;
}

const isDivisibleBy = (n: number, divisor: number): boolean => n % divisor === 0;

const containsNumber = (n: number, toContain: number): boolean => {
    return `${n}`.includes(`${toContain}`);
}