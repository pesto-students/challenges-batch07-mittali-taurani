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
    if (value >= 0 && value <= this.iteratingArray.length - 1) {
      this.currentIndex = value;
    } else {
      this.currentIndex = this.iteratingArray.length - 1;
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
    let iterator = this.iteratingArray.length - 1;
    this.currentIndex = 0;
    while (iterator >= 0) {
      yield this.current();
      this.currentIndex += 1;
      iterator -= 1;
    }
  }
}
export { Cycled };
