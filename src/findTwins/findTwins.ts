export const elimination = (arr: number[]): number | null => {
  const duplicates = arr?.filter((item, index) => arr.indexOf(item) !== index);

  const result = duplicates?.length > 0 ? duplicates[0] : null;

  return result;
};

console.log(elimination([2, 5, 34, 1, 22, 1]));
console.log(elimination([3, 6, 34, 7, 8, 2]));
console.log(elimination([2, 3, 6, 34, 7, 8, 2]));
console.log(elimination([]));
console.log(elimination([3, 5, 9, 10, 38, 10]));
