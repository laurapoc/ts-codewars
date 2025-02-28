// In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of all password pieces in the array)

// The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, your initial position in the array will be the character "x".

// Heres what the array looks like

// [
//   ["p", "x", "m"],
//   ["a", "$", "$"],
//   ["k", "i", "t"]
// ]
// The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT], the former would be used to move around the grid while the latter would be used when you have a password to that direction of you.( E.g if you are in a position and the move to make is leftT it means theres a password to the left of you, so take the value and move there)

// So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"], making for the word "pa$$".

// Remember you initial position is the character "x".

// So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.

// Another example.

// grid = [
//   ["a", "x", "c"],
//   ["g", "l", "t"],
//   ["o", "v", "e"]
// ];

// directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

// getPassword(grid, directions) // => "lovet"
// Once again, Your initial position is the character "x", so from the position of "x" you follow the directions given and get all pieces in the grid.

const grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"],
];

const directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"];

export const getPassword: (grid: string[][], directions: string[]) => string = (
  grid: string[][],
  directions: string[]
) => {
  let row = 0,
    col = 0;

  // Find the initial position of 'x'
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "x") {
        row = r;
        col = c;
      }
    }
  }

  let password = "";

  // Direction mapping
  const moves: Record<string, [number, number]> = {
    left: [0, -1],
    right: [0, 1],
    up: [-1, 0],
    down: [1, 0],
    leftT: [0, -1],
    rightT: [0, 1],
    upT: [-1, 0],
    downT: [1, 0],
  };

  for (const direction of directions) {
    const [dr, dc] = moves[direction];
    const newRow = row + dr;
    const newCol = col + dc;

    // Ensure movement stays within bounds
    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length
    ) {
      if (direction.endsWith("T")) {
        password += grid[newRow][newCol]; // Collect the character
      }
      row = newRow;
      col = newCol;
    }
  }

  return password;
};

export const getPasswordVersionTwo = (
  grid: string[][],
  directions: string[]
): string => {
  let row = 0;
  let col = 0;

  // Find the initial position of 'x'
  grid.forEach((r, index) =>
    r.forEach((el, idx) => {
      if (el === "x") [row, col] = [index, idx];
    })
  );

  let password = "";
  const moves: Record<string, [number, number]> = {
    left: [0, -1],
    right: [0, 1],
    up: [-1, 0],
    down: [1, 0],
    leftT: [0, -1],
    rightT: [0, 1],
    upT: [-1, 0],
    downT: [1, 0],
  };

  directions.forEach((direction) => {
    const [dr, dc] = moves[direction];
    const [newRow, newCol] = [row + dr, col + dc];

    if (grid[newRow]?.[newCol] !== undefined) {
      if (direction.endsWith("T")) password += grid[newRow][newCol];
      [row, col] = [newRow, newCol];
    }
  });

  return password;
};

console.log(getPasswordVersionTwo(grid, directions));
