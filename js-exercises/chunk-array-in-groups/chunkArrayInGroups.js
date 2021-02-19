function chunkArrayInGroups(array, chunkSize) {
  // check for no argument
  if (!array) return [];
  // if size of array is less than or equal to chunk size pass the array
  if (array.length <= chunkSize) return [array];
  // if array size is greater than chunk size then recursively reduce size of array using slice()
  return [array.slice(0, chunkSize), ...chunkArrayInGroups(array.slice(chunkSize), chunkSize)];
}

export { chunkArrayInGroups };
