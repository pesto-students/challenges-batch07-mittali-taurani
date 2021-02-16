function curry(fn) {
  return function curriedFunction(...args1) {
    // if the number of argumrnts accepted by fn is equal or more call the fn
    if (args1.length >= fn.length) return fn.apply(this, args1);
    // return a new function and add it to nested list
    return function concatArguments(...args2) {
      return curriedFunction.apply(this, args1.concat(args2));
    };
  };
}

export { curry };
