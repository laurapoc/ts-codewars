describe("String.prototype.toJadenCase", () => {
  it("should capitalize the first letter of each word", () => {
    expect(
      "first letter of each word should be capitalized".toJadenCase()
    ).toEqual("First Letter Of Each Word Should Be Capitalized");
    expect(
      "How can mirrors be real if our eyes aren't real".toJadenCase()
    ).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});
