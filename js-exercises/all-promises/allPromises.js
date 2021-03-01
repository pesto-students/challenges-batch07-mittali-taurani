const allPromises = args => new Promise((resolve, reject) => {
  if (!Array.isArray(args)) reject(new TypeError('Invalid data type of argument'));
  const resolvedResponses = [];
  let executedFunctions = 0;
  args.forEach((task, index) => {
    Promise.resolve(task).then(respond => {
      resolvedResponses[index] = respond;
      executedFunctions += 1;
      if (executedFunctions === args.length) {
        resolve(resolvedResponses);
      }
    }).catch(error => reject(error));
  });
});

export { allPromises };
