import { elimination } from "./findTwins";

describe("elimination", () => {
  it("returns the first duplicate number or null, if dublicate number does not exist", () => {
    expect(elimination([2, 5, 34, 1, 22, 1])).toEqual(1);
    expect(elimination([3, 6, 34, 7, 8, 2])).toEqual(null);
    expect(elimination([2, 3, 6, 34, 7, 8, 2])).toEqual(2);
    expect(elimination([])).toEqual(null);
    expect(elimination([3, 5, 9, 10, 38, 10])).toEqual(10);
  });
});
