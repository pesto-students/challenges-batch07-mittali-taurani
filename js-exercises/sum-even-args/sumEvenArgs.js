const sumEvenArgs = (...args) => {
  // Check for no argument
  if (args) {
    let sumEvenNumbers = 0;
    // Filter the args array to get even numbers and reduce that even numbers array to get their sum
    sumEvenNumbers = args.filter(number => number % 2 === 0)
      .reduce((accumulator, evenNumber) => accumulator + evenNumber, 0);
    return sumEvenNumbers;
  }
  return 0;
};

export { sumEvenArgs };
