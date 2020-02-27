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

document.writeln(
  "<p>3. Write a function that receives two sequences: A and B of integers and returns one sequence C. Sequence C should contain all elements from sequence A (maintaining the order) except those, that are present in sequence B p times, where p is a prime number.</p>"
);

const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const checkPresenceNotPrimeTimes = (A, B) => {
  const C = [];
  A.forEach(currItem => {
    const countPresence = B.filter(bItem => bItem === currItem).length;
    if (isPrime(countPresence) == false) C.push(currItem);
  });
  return C;
};

document.writeln(
  "<p>Testing [2, 3, 9, 2, 5, 1, 3, 7, 10] and [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10] if equals to [2, 9, 2, 5, 7, 10]</p>"
);

if (
  JSON.stringify(
    checkPresenceNotPrimeTimes(
      [2, 3, 9, 2, 5, 1, 3, 7, 10],
      [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]
    )
  ) == JSON.stringify([2, 9, 2, 5, 7, 10])
) {
  document.writeln(
    "<p style='width: 60px; background-color:green; color: white;'>Test passed</p>"
  );
}

document.writeln(
  "Conclusion: Weakest point of algorithm is iteration checking if number is prime, thus in case when checked number is very big, time complexity could be worse."
);

// Optimized app with lots of stuff description:
// We are fetching data from API, if there is more than one source, we can wrap few fetch functions in one Promise.all to be sure we will fetch all of them. Obviously we have to handle error responses. After that we should create separated functional component (in the future will be quicker than class-component) with image and stuff surrounding it. In main component we can display components with image using lazy load (react.lazy or react-lazyload) to load them only if user scrolls view. Detailed data inside image component could be fetched when image component is in use. To make performance better, we can load blurred very small image placeholder and after that, lazy load should make it normal optimized for web image. All image components could be wrapped by React fragment <> for not adding additional node to DOM. We could also use React.memo, then React virtual DOM won’t render unchanged nodes. All data should be stored at Redux state for better performance and accessibility.

document.writeln(
  "<br /><br /><br /><br />Napisz algorytm, który jeśli element macierzy o wymiarach M x N ma wartość zero ustawia cały wiersz i kolumnę tego elementu na 0. :<br />"
);

const input = [
  [0, 2, 3, 4, 5, 6, 7, 8, 9],
  [11, 12, 13, 14, 15, 16, 17, 18, 19],
  [21, 22, 23, 24, 25, 26, 27, 28, 29],
  [31, 32, 33, 0, 35, 36, 37, 38, 39],
  [41, 42, 43, 0, 45, 0, 47, 48, 49],
  [51, 52, 53, 54, 55, 56, 57, 58, 59],
  [61, 62, 63, 64, 65, 66, 67, 68, 69]
];

function printMatrix(table) {
  if (Array.isArray(table) == false) {
    document.writeln(table + "<br />It is not an array!");
  } else {
    table.forEach(row => {
      document.writeln("[");
      row.forEach(cell => {
        document.write(`${cell}, `);
      });
      document.writeln("]<br />");
    });
    document.writeln("<br />");
  }
}

function clearRowsAndColumnsEqZero(input) {
  const clearColumns = [];
  const clearRows = [];
  const rows = input.length;
  const columns = input[0].length;

  input.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 0) {
        clearColumns.push(columnIndex);
        clearRows.push(rowIndex);
      }
    });
  });

  clearRows.forEach(row => {
    for (let i = 0; i < columns; i++) {
      input[row][i] = 0;
    }
  });

  clearColumns.forEach(column => {
    for (let i = 0; i < rows; i++) {
      input[i][column] = 0;
    }
  });

  return input;
}

document.write("Input:<br>");
printMatrix(input);

document.write("Output:<br>");
printMatrix(clearRowsAndColumnsEqZero(input));
