function dropElements(elements, predicate) {
  /* filter out all the elements from given array that pass the test
  specified by the provided function */
  return elements.filter(predicate);
}

export { dropElements };
