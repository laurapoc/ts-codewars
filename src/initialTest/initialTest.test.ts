import { nodeRunTestFunction } from "./initialTest";

describe("nodeTest", () => {
  it("returns given string", () => {
    expect(nodeRunTestFunction("test")).toEqual("test");
  });
});
