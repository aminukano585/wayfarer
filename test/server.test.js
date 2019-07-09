import chai from "chai";

import sum from "../server";

const { expect } = chai;

describe("sum function", () => {
  it("sums up two integers", () => {
    expect(sum(1, 3)).to.eql(4);
  });
});
