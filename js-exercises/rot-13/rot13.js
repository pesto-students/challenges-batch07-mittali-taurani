function rot13(cipherString) {
  let result = '';
  if (typeof (cipherString) === 'string') {
    let splitString = cipherString.trim().split(' ');
    let decipherString = [];
    for (let word of splitString) {
      const temp = word.split('')
        .map(char => ((/[A-Z]/).test(char) ? String.fromCharCode(char.charCodeAt(0) + (char < 'N' ? 13 : -13)) : char))
        .join('');
      decipherString.push(temp);
    }
    result = decipherString.join(' ');
  } /* else {
    throw new Error('throws error on invalid parameters');
  } */
  return result;
}

export { rot13 };
