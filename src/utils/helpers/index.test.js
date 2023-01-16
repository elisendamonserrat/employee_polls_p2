import { calculatePercentage, capitalizeStr, sum } from "./index";

describe("sum", () => {
  it("will return the sum of all the arguments passed", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    expect(sum(2, 4, 6, 8, 10)).toBe(30);
    expect(sum(-1, -2, -3)).toBe(-6);
  });

  it("will not return the sum of all the arguments passed", () => {
    expect(sum(1, 2, 3, 4, 5)).not.toBe(16);
    expect(sum(2, 4, 6, 8, 10)).not.toBe(31);
  });

  it("will not return positive values when arguments values are negative", () => {
    expect(sum(-1, -2, -3)).not.toBe(6);
    expect(sum(-2, -4, -6, -8, -10)).not.toBe(30);
  });
});

describe("capitalize strings", () => {
  it("will capitalize the first letter of a string", () => {
    expect(capitalizeStr("hello")).toBe("Hello");
    expect(capitalizeStr("world")).toBe("World");
  });

  it("Will return the original string if first letter is already capitalized", () => {
    expect(capitalizeStr("Hello")).toBe("Hello");
    expect(capitalizeStr("World")).toBe("World");
  });

  it("Will return an empty string if input is empty", () => {
    expect(capitalizeStr("")).toBe("");
  });

  it("Will throw an error if input is not a string", () => {
    expect(() => capitalizeStr(123)).toThrow();
    expect(() => capitalizeStr(null)).toThrow();
    expect(() => capitalizeStr({})).toThrow();
  });
});

describe("calculate percentage", () => {
  it("Will calculate the percentage correctly", () => {
    expect(calculatePercentage(10, 100)).toBe("10.00");
    expect(calculatePercentage(50, 200)).toBe("25.00");
    expect(calculatePercentage(3, 7)).toBe("42.86");
  });

  it("Will returns 0 if num is 0", () => {
    expect(calculatePercentage(0, 100)).toBe("0.00");
    expect(calculatePercentage(0, 50)).toBe("0.00");
  });
  it("Will return an error if inputs are not numbers", () => {
    expect(() => calculatePercentage("50", 100)).toThrow();
    expect(() => calculatePercentage(50, "100")).toThrow();
    expect(() => calculatePercentage("50", "100")).toThrow();
  });
  it("Will return a number with two decimals", () => {
    expect(calculatePercentage(3, 7)).toBe("42.86");
    expect(calculatePercentage(3, 7)).not.toBe("43");
  });
});
