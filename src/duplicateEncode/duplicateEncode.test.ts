import { duplicateEncode } from "./duplicateEncode";

describe("duplicateEncode", () => {
  it("should return ((( when given word is din", () => {
    expect(duplicateEncode("din")).toEqual("(((");
  });

  it("should return ()()() when given word is recede", () => {
    expect(duplicateEncode("recede")).toEqual("()()()");
  });

  it("should return )())()) when given word is Success", () => {
    expect(duplicateEncode("Success")).toEqual(")())())");
  });

  it("should return ))(( when given word is (( @", () => {
    expect(duplicateEncode("(( @")).toEqual("))((");
  });
});
