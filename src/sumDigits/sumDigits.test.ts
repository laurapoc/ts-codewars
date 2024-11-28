import { sumDigits } from "./sumDigits";

describe("sumDigits", () => {
  it("sums the digits of a number", () => {
    expect(sumDigits(-25)).toBe(7);
    expect(sumDigits(25)).toBe(7);
    expect(sumDigits(18)).toBe(9);
    expect(sumDigits(0)).toBe(0);
  });
});
