import { fizzbuzz } from "./main";

/**
 * if divisible by 3 => fizz
 * if divisible by 5 => buzz
 * if divisible by 3 and by 5 => fizzbuzz
 */
test("0 should be divisble by 3 and 5", () => {
    expect(fizzbuzz(0)).toEqual("fizzbuzz");
});

test("1 should not be divisible", () => {
    expect(fizzbuzz(1)).toEqual("1");
});

test("3 should not be divisible", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
});

test("5 should not be divisible", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
});

test("15 should not be divisible", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
});

test("13 should not be divisible", () => {
    expect(fizzbuzz(13)).toEqual("fizz");
});

test("51 should not be divisible", () => {
    expect(fizzbuzz(51)).toEqual("fizzbuzz");
});

test("52 should not be divisible", () => {
    expect(fizzbuzz(52)).toEqual("buzz");
});

test("53 should not be divisible", () => {
    expect(fizzbuzz(53)).toEqual("fizzbuzz");
});