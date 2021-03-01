const allSettled = args => new Promise((resolve, reject) => {
  if (!Array.isArray(args)) reject(new TypeError('Invalid data type of argument'));
  const asyncFnResponses = [];
  let executedFunctions = 0;
  args.forEach((task, index) => {
    Promise.resolve(task).then(respond => {
      asyncFnResponses[index] = { status: 'fulfilled', value: respond };
      executedFunctions += 1;
      if (executedFunctions === args.length) {
        resolve(asyncFnResponses);
      }
    }).catch(error => {
      asyncFnResponses[index] = { status: 'rejected', value: error };
      executedFunctions += 1;
      if (executedFunctions === args.length) {
        resolve(asyncFnResponses);
      }
    });
  });
});

export { allSettled };
