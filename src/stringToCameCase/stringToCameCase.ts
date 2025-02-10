export function toCamelCase(str: string): string {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
console.log(toCamelCase("the_stealth_warrior"));
