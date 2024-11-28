import { combineNames, sortGiftCode, pyramid } from "./kata";

describe("Kata", () => {
  describe("combineNames", () => {
    it("takes a name and a surname, combines them with a space in between, and returns the full name", () => {
      expect(combineNames("John", "Doe")).toBe("John Doe");
      expect(combineNames("Jane", "Smith")).toBe("Jane Smith");
      expect(combineNames("John", "Smith")).toBe("John Smith");
    });
  });

  describe("sortGiftCode", () => {
    it("takes a string, sorts the characters in ascending order, and returns the sorted string", () => {
      expect(sortGiftCode("abcdef")).toBe("abcdef");
      expect(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")).toBe(
        "abcdefghijklmnopqrstuvwxyz"
      );
      expect(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")).toBe(
        "abcdefghijklmnopqrstuvwxyz"
      );
    });
  });

  describe("pyramid", () => {
    it("takes a number n, returns an array of ascending length subarrays", () => {
      expect(pyramid(0)).toEqual([]);
      expect(pyramid(1)).toEqual([[1]]);
      expect(pyramid(2)).toEqual([[1], [1, 1]]);
      expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
      expect(pyramid(5)).toEqual([
        [1],
        [1, 1],
        [1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ]);
    });
  });
});
