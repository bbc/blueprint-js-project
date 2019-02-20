const sum = require("./index");

describe("index.js", () => {
  it("should test some", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
