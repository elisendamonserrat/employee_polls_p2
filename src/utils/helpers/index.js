// Capitalize 1st letter of a string
export const capitalizeStr = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Calculate % of votes
export const calculatePercentage = (num, total) => {
  if (typeof num !== "number" || typeof total !== "number")
    throw new Error("Inputs must be numbers");
  if (total === 0) throw new Error("Total cannot be 0");

  return ((num / total) * 100).toFixed(2);
};

// Calculte sum
export const sum = (...args) => [...args].reduce((a, b) => a + b, 0);