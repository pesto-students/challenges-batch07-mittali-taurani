// You can change the `args`
function bind(fn, obj) {
  return function hardBind(...args) {
    return fn.apply(obj, args);
  };
}

export { bind };
