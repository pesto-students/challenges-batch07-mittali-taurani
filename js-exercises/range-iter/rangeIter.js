function rangeIter(lb, ub) {
  if (typeof lb === 'undefined' || typeof ub === 'undefined') throw TypeError('undefined is not a number');
  else if (Number.isNaN(Number(lb))) throw TypeError(`${lb} is not a number`);
  else if (Number.isNaN(Number(ub))) throw TypeError(`${ub} is not a number`);
  else {
    let rangeNumbers = [];
    if (lb > ub) rangeNumbers = [];
    else {
      const range = {};
      range[Symbol.iterator] = () => ({
        current: lb,
        last: ub,
        next() {
          if (this.current <= this.last) {
            const nextResult = { done: false, value: this.current };
            this.current += 1;
            return nextResult;
          }
          return { done: true };
        },
      });
      for (const num of range) {
        rangeNumbers.push(num);
      }
    }
    return rangeNumbers;
  }
}

export { rangeIter };
