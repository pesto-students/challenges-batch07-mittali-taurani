const deepCopyObject = objToCopy => {
  if (objToCopy === null || typeof objToCopy !== 'object') {
    return objToCopy;
  }
  // create a new object using literal and add properties to that object
  const clonedObject = {};
  for (const key in objToCopy) {
    if (Object.prototype.hasOwnProperty.call(objToCopy, key)) {
      clonedObject[key] = deepCopyObject(objToCopy[key]);
    }
  }
  return clonedObject;
};

export { deepCopyObject };
