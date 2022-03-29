// teilt sich durch 4
// nicht durch 100 teilbar
// außer wenn es durch 400

import { leap } from "./leapyear";

const testCases = [
    { value: 1, expected: true }
];

test("Should divide", () => {
    expect(leap(1)).toBe(false);
})

test("Should return true for 0", () => {
    expect(leap(0)).toBe(true);
})

test("Should return true for 4", () => {
    expect(leap(4)).toBe(true);
})

test("Should return false for 100", () => {
    expect(leap(100)).toBe(false);
})

test("Should return false for 200", () => {
    expect(leap(200)).toBe(false);
})

test("Should return true for 400", () => {
    expect(leap(400)).toBe(true);
})

test("Should return true for 800", () => {
    expect(leap(800)).toBe(true);
})
