// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// example:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

export const partlist = (arr: string[]): string[][] | string[] => {
  const result: any = [];

  arr.forEach((_, i) => {
    if (i < arr.length - 1) {
      result.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);
    }
  });

  return result;
};

const a = ["az", "toto", "picaro", "zone", "kiwi"];

console.log(partlist(a));
