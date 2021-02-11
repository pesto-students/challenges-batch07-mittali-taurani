function duplicateLetters(...args) {
  let charMap = {};
  let valuesArray = [];
  let maxCharValue = 0;

  for (let i = 0; i < args[0].length; i += 1)
  {
    let char = args[0][i];
    if (Object.prototype.hasOwnProperty.call(charMap, char)) 
      charMap[char] += 1;
    else 
      charMap[char] = 1;
  }
  valuesArray = Object.values(charMap);
  maxCharValue = Math.max(...valuesArray);
  let result = (maxCharValue == 1) ? false : maxCharValue;
  return result;
}

export {
  duplicateLetters,
};
