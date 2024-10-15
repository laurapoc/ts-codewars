// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x: any[]) {
  console.log(x.reduce((acc, curr) => acc * curr, 1));
  return x.reduce((acc, curr) => acc * curr, 1);
}

const growNumbers = (array: number[]) => {
  let result: number = 1;

  array.forEach((num: number) => {
    result = result * num;
  });
  console.log(result);
  return result;
};

grow([1, 2, 3, 4]);
grow([4, 1, 1, 1, 4]);
grow([2, 2, 2, 2, 2, 2]);

growNumbers([1, 2, 3, 4]);
growNumbers([4, 1, 1, 1, 4]);
growNumbers([2, 2, 2, 2, 2, 2]);
