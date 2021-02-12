function sumFibs(num) {
  let prevNo = 1;
  let currNo = 1;
  let nextNo = 0;
  let result = 0;
  // Check to validate the input
  if (num <= 0) return 0;
  // Calculate sum if the number is valid
  while (nextNo <= num) {
    if (nextNo % 2 !== 0) result += nextNo;
    prevNo = currNo;
    currNo = nextNo;
    nextNo = prevNo + currNo;
  }
  return result;
}

function cacheFunction(fn) {
  const memo = {};
  // memoized function that returns result from cache i.e memo
  return function (n) {
    if (n in memo) {
      return memo[n];
    }
    // if result not found in cache then calculate the result store in cache
    memo[n] = fn(n);
    return memo[n];
  };
}

export { sumFibs, cacheFunction };
