export const combineNames = (name: string, surname: string): string => {
  return `${name} ${surname}`;
};

export const sortGiftCode = (string: string): string => {
  let result = string
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  return result;
};

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

export const pyramid = (n: number) => {
  if (n === 0) return [];
  const result: any[] = [];
  const repeatedValue = "1";
  let subArray = [];

  for (let i = 0; i <= n; i++) {
    if (i !== 0) {
      subArray.push(repeatedValue.repeat(i));
    }
  }

  subArray.forEach((element) => {
    result.push(element.split("").map(Number));
  });

  return result;
};

pyramid(0);
pyramid(1);
pyramid(2);
pyramid(5);
