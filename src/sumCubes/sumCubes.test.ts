import { sumCubes } from "./sumCubes";

describe("sumCubes", () => {
  it("takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum", () => {
    expect(sumCubes(1)).toBe(1);
    expect(sumCubes(2)).toBe(9);
    expect(sumCubes(3)).toBe(36);
    expect(sumCubes(4)).toBe(100);
    expect(sumCubes(10)).toBe(3025);
    expect(sumCubes(123)).toBe(58155876);
  });
});
