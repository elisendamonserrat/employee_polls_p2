import { calculatePercentage, capitalizeStr, sum } from "./index";

describe("sum", () => {
  it("will return the sum the arguments passed", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
