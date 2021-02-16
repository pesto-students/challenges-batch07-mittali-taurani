function balancedBraces(str) {
  const bracketsMap = new Map();
  bracketsMap.set(']', '[');
  bracketsMap.set('}', '{');
  bracketsMap.set(')', '(');
  // Use the spread operator to transform a map into a 2D key-value Array.
  const closingBrackets = [...bracketsMap.keys()];
  const openingBrackets = [...bracketsMap.values()];
  const stack = [];
  // loop trought all characters of input string
  str.split('').map((char) => {
    // if it's opening bracket push it else check if it's closing bracket
    if (openingBrackets.indexOf(char) > -1) {
      stack.push(char);
    } else if (closingBrackets.indexOf(char) > -1) {
      const expectedBracket = openingBrackets[closingBrackets.indexOf(char)]; // find its pair
      // check if expectedBracket is the last element added to the stack
      // if so remove it or else push it
      if (stack[stack.length - 1] === expectedBracket) {
        stack.splice(-1, 1);
      } else {
        stack.push(char);
      }
    }
    return stack;
  });
  return (stack.length === 0);
}

export { balancedBraces };
