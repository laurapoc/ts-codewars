const keyValuesByNUmbers: Record<string, string[]> = {
  "1": [".", ",", "?", "!"],
  "2": ["a", "b", "c"],
  "#": ["-"],
};

const isUpperCase = (str: string) => /^[A-Z]*$/.test(str);

export function sendMessage(message: string): string {
  let result = "";
  const arrayOfKeyNumbers = Object.keys(keyValuesByNUmbers);

  const messageIntoStringArray = message.split("");

  let capitalLetterToggle = false;

  messageIntoStringArray.forEach((letter: string) => {
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
          result = result + "#" + buttonSymbol.repeat(position);
          capitalLetterToggle = !capitalLetterToggle;
        } else {
          result = result + buttonSymbol.repeat(position);
        }
      }
    });
  });

  return result;
}

console.log(sendMessage("?-"));
console.log(sendMessage("!ABb"));
