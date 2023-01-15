// Capitalize 1st letter of a string
export const capitalizeStr = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Calculate % of votes
export const calculatePercentage = (num, total) =>
  ((num / total) * 100).toFixed("");

// Calculte sum
export const sum = (...args) => [...args].reduce((a, b) => a + b, 0);
