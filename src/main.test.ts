import { leap } from "./main";

test("should return false for 1", () => {
    expect(leap(1)).toBe(false)
})

test("should return true for 4", () => {
    expect(leap(4)).toBe(true)
})
