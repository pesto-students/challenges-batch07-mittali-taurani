function debounce(fn, timeInMs) {
  let debounceTimerId;
  if (arguments.length < 2) throw new Error(`debounce function requires 2 arguments, but only ${arguments.length} were passed`);
  return function debounceReturnFunc(...args) {
    // To cancel the setTimeout fn execution
    clearTimeout(debounceTimerId);
    debounceTimerId = setTimeout(() => fn.apply(this, args), timeInMs);
  };
}

export { debounce };
