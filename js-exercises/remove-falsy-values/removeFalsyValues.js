function removeFalsyValues(array) {
  // implicit conversion of array values to Boolean() object
  // Boolean returns true or false based on value
  return array.filter(Boolean);
}

export {
  removeFalsyValues,
};
