function findAllTriplets(arr, sum) {
  arr.sort((a, b) => a - b);

  const resultArray = [];

  for (let i = 0; i < arr.length - 2; i += 1) {
    let startIndex = i + 1;
    let endIndex = arr.length - 1;
    while (startIndex < endIndex) {
      if (arr[i] + arr[startIndex] + arr[endIndex] === sum) {
        resultArray.push([arr[i], arr[startIndex], arr[endIndex]]);
        startIndex += 1;
        endIndex -= 1;
      } else if (arr[i] + arr[startIndex] + arr[endIndex] < sum) startIndex += 1;
      else endIndex -= 1;
    }
  }

  return Array.from(new Set(resultArray.map(JSON.stringify))).map(JSON.parse);
}

function validator(arr, sum) {
  const isValidNumber = (value) => Number.isNaN(Number(value));

  if (isValidNumber(sum)) {
    throw new Error(`Expected sum of type number. Received: ${typeof sum}`);
  }

  if (!Array.isArray(arr)) {
    throw new Error(`Expected arr to be an Array. Received: ${typeof arr}`);
  }

  const isSomeValuesNotNumbersInArray = arr.some(
    (value) => isValidNumber(value),
  );

  if (isSomeValuesNotNumbersInArray) {
    throw new Error('Expected all values in arr array to be of number type.');
  }
}

function withValidation(fn, validatorFn) {
  return function closureFn(...args) {
    validatorFn(...args);
    return fn(...args);
  };
}
const findAllTripletsWithValidator = withValidation(findAllTriplets, validator);

export { findAllTripletsWithValidator as findAllTriplets };
