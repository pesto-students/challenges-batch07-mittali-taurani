class Cycled {
  constructor(iteratingArray) {
    this.iteratingArray = iteratingArray;
    this.currentIndex = 0;
  }

  current() {
    return this.iteratingArray[this.currentIndex];
  }

  next() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.iteratingArray.length) this.currentIndex = 0;
    return this.current();
  }

  previous() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) this.currentIndex = this.iteratingArray.length - 1;
    return this.current();
  }

  step(stepBy) {
    this.currentIndex += stepBy;
    if (this.currentIndex < 0) this.currentIndex = 0;
    return this.current();
  }

  get index() {
    return this.currentIndex;
  }

  set index(value) {
    if (value >= 0) {
      this.currentIndex = value % this.iteratingArray.length;
    }
  }

  reversed() {
    const arrayToReverse = [...this.iteratingArray];
    return arrayToReverse.reverse()[Symbol.iterator]();
  }

  indexOf(value) {
    return this.iteratingArray.indexOf(value);
  }

  * [Symbol.iterator]() {
    let length = this.iteratingArray.length - 1;
    while (length >= 0) {
      yield this.current();
      this.index = this.currentIndex + 1;
      length -= 1;
    }
  }
}
export { Cycled };
