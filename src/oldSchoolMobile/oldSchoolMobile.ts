// link to codewars kata: https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/typescript

const keyValuesByNUmbers: Record<string, string[]> = {
  "1": [".", ",", "?", "!"],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
  "*": ["-", "+", "="],
  "0": [" "],
  "#": [],
};

const isUpperCase = (str: string) => /^[A-Z]*$/.test(str);

let lastPressedButton: string = "";

const pressTheButton = (buttonName: string, position?: number): string => {
  lastPressedButton = buttonName;
  return position ? buttonName.repeat(position) : buttonName;
};

export function sendMessage(message: string): string {
  let result = "";
  const arrayOfKeyNumbers = Object.keys(keyValuesByNUmbers);

  const messageIntoStringArray = message.split("");

  let capitalLetterToggle = false;

  //   map through every single letter
  messageIntoStringArray.forEach((letter: string) => {
    //   map through keyValuesByNUmbers object properties
    arrayOfKeyNumbers.forEach((buttonSymbol: string) => {
      const buttonSymbolPossibleValues = keyValuesByNUmbers[buttonSymbol];

      let position = -1;

      for (let i = 0; i < buttonSymbolPossibleValues.length; i++) {
        if (buttonSymbolPossibleValues[i] === letter.toLowerCase()) {
          position = i + 1;
        }
      }

      if (position > -1) {
        if (
          (isUpperCase(letter) && !capitalLetterToggle) ||
          (!isUpperCase(letter) && capitalLetterToggle)
        ) {
          // add # if need to change to lowercase or upper case
          result =
            result +
            pressTheButton("#") +
            pressTheButton(buttonSymbol, position);
          capitalLetterToggle = !capitalLetterToggle;
        } else {
          if (lastPressedButton === buttonSymbol) {
            //   add space if previous letter is on the same button and is the same case (lowercase input and lowercase character)
            result = result + " " + pressTheButton(buttonSymbol, position);
          } else {
            result = result + pressTheButton(buttonSymbol, position);
          }
        }
      }
    });
  });
  lastPressedButton = "";
  return result;
}

console.log(sendMessage("?-"));
console.log(sendMessage("!ABb-"));
console.log(sendMessage("- AbbaC"));
console.log(sendMessage("hey"));
console.log(sendMessage("one two three"));
