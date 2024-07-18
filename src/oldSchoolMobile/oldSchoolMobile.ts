// link to codewars kata: https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/typescript

import { CapitalizeLetterPropsType } from "./types";

const keyValuesByNumbers: Record<string, string[]> = {
  "1": [".", ",", "?", "!"],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
  "*": ["'", "-", "+", "="],
  "0": [" "],
  "#": [],
};

const isUpperCase = (str: string) => /^[A-Z]*$/.test(str);
const onlyAlphabetic = /^[a-zA-Z]+$/;

let lastPressedButton: string = "";

const isLetterInPossibleValues = (possibleValues: string, letter: string) =>
  possibleValues === letter.toLowerCase();

const isCharacterANumber = (buttonSymbol: string, letter: string) =>
  buttonSymbol === letter;

const pressTheButton = (buttonName: string, position?: number): string => {
  lastPressedButton = buttonName;
  return position ? buttonName.repeat(position) : buttonName;
};

const ceckIfChangeLetterToUppercase = ({
  letter,
  capitalLetterToggle,
}: CapitalizeLetterPropsType) =>
  isUpperCase(letter) && !capitalLetterToggle && onlyAlphabetic.test(letter);

const checkIfChangeLetterToLowercase = ({
  letter,
  capitalLetterToggle,
}: CapitalizeLetterPropsType) =>
  !isUpperCase(letter) && capitalLetterToggle && onlyAlphabetic.test(letter);

const toggleUppercase = ({
  letter,
  capitalLetterToggle,
}: CapitalizeLetterPropsType) =>
  ceckIfChangeLetterToUppercase({ letter, capitalLetterToggle }) ||
  checkIfChangeLetterToLowercase({ letter, capitalLetterToggle });

const isLetterInArrayOrEqualToButtonSymbol = (
  possibleValues: string,
  letter: string,
  buttonSymbol: string
) =>
  isLetterInPossibleValues(possibleValues, letter) ||
  isCharacterANumber(buttonSymbol, letter);

const generateResultWithoutSpecialLetters = (
  pressedButtonPreciously: string,
  buttonSymbol: string,
  addSpace: () => void,
  onlyPressButton: () => void
) => {
  if (pressedButtonPreciously === buttonSymbol) {
    //   add space if previous character was on the same button and was the same case (lowercase or upper case)
    addSpace();
  } else {
    onlyPressButton();
  }
};

export function sendMessage(message: string): string {
  let result = "";
  const arrayOfKeyNumbers = Object.keys(keyValuesByNumbers);

  const messageIntoStringArray = message.split("");

  let capitalLetterToggle = false;

  //   map through every single letter
  messageIntoStringArray.forEach((letter: string) => {
    //   map through keyValuesByNumbers object properties
    arrayOfKeyNumbers.forEach((buttonSymbol: string) => {
      const buttonSymbolPossibleValues = keyValuesByNumbers[buttonSymbol];

      let position = -1;

      for (let i = 0; i < buttonSymbolPossibleValues.length; i++) {
        if (
          isLetterInArrayOrEqualToButtonSymbol(
            buttonSymbolPossibleValues[i],
            letter,
            buttonSymbol
          )
        ) {
          position = i + 1;
        }
      }

      if (position > -1) {
        // if uppercase and did not toggle capital, or eather way, and only alphabetic letter
        if (
          toggleUppercase({
            letter,
            capitalLetterToggle,
          })
        ) {
          // add # if need to change to lowercase or upper case
          result =
            result +
            pressTheButton("#") +
            pressTheButton(buttonSymbol, position);
          capitalLetterToggle = !capitalLetterToggle;
        } else if (isCharacterANumber(buttonSymbol, letter)) {
          // hold the button if the character should be a number
          result = result + `${buttonSymbol}-`;
        } else {
          const addSpace = () => {
            result = result + " " + pressTheButton(buttonSymbol, position);
          };
          const onlyPressButton = () => {
            result = result + pressTheButton(buttonSymbol, position);
          };

          generateResultWithoutSpecialLetters(
            lastPressedButton,
            buttonSymbol,
            addSpace,
            onlyPressButton
          );
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
console.log(sendMessage("12 hey"));
console.log(sendMessage("Def Con 1!"));
console.log(sendMessage("A-z"));
