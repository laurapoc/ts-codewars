export function sumDigits(number: number): any {
  let sum = 0;
  if (number < 0) {
    number = number * -1;
  }
  const stringifiedNUmber = number.toString();
  sum = stringifiedNUmber
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  return sum;
}

console.log(sumDigits(-25));
console.log(sumDigits(25));
console.log(sumDigits(18));
console.log(sumDigits(0));
