console.log(
  "1. Arrays of integers array and a single sum value given, return the first two values in order of apperance that adds up to form the sum.\n\n"
);

function sumArrayOutput(arr) {
  const testArr = arr[0];
  const result = arr[1];
  let resultArr = [];
  let activeIndexes = [];
  let smallestSum = -1;

  testArr.forEach((currNum, currIndex) => {
    if (
      testArr.indexOf(result - currNum) !== currIndex &&
      testArr.indexOf(result - currNum) > -1 &&
      !activeIndexes.includes(currIndex)
    ) {
      let searchingIndex = testArr.indexOf(result - currNum);
      if (smallestSum === -1)
        smallestSum = Math.abs(currIndex - searchingIndex);

      if (
        !activeIndexes.includes(currIndex) &&
        !activeIndexes.includes(searchingIndex) &&
        Math.abs(currIndex - searchingIndex) <= smallestSum
      ) {
        resultArr = [currIndex, searchingIndex];
        smallestSum = Math.abs(currIndex - searchingIndex);
      }

      activeIndexes.push(currIndex, searchingIndex);
    }
  });

  return [testArr[resultArr[0]], testArr[resultArr[1]]];
}

const sumArrayInput = [
  [[1, 4, 8, 7, 3, 15], 8],
  [[5, 9, -10], -1],
  [[10, 5, 2, 3, 7, 5], 10]
];

sumArrayInput.forEach(arr => {
  console.log("Test Array: ");
  console.log(arr);
  console.log("Output Array: ");
  console.log(sumArrayOutput(arr));
  console.log("");
});

console.log(
  "\n\n2. Write a function which will break up camel casing, using a space between words.\n\n"
);

function camelCaseSplit(S) {
  let result = "";
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    result += char == char.toUpperCase() && i != 0 && isNaN ? " " + char : char;
  }
  return result;
}

console.log("Input string:");
console.log("testCamelCase");
console.log(camelCaseSplit("testCamelCase"));
