const limitFunctionCallCount = (...args) => {
  let cb = () => {};
  let number = 0;
  let count = 0;
  if (args.length > 0) {
    [cb, number] = args;
  }
  return (...moreArgs) => {
    if (count < number) {
      count += 1;
      return cb(...moreArgs);
    }
    return null;
  };
};

export { limitFunctionCallCount };
