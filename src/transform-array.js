const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    let modArr = [...arr];
    for (let i = 0; i < modArr.length; i++) {
      if (typeof modArr[i] === 'string') {
        console.log(modArr[i]);
        if (modArr[i] === '--discard-next') {
          if (modArr[i + 1]) {
            modArr.splice(i + 1, 1);
          } else {
            modArr.splice(i, 1);
          }
        }
        if (modArr[i] === '--discard-prev') {
          if (modArr[i - 1] && typeof modArr[i - 1] !== 'string') {
            modArr.splice(i - 1, 1);
            modArr.splice(i - 1, 1);
          } else if (typeof modArr[i - 1] === 'string') {
            modArr.splice(i, 1);
            modArr.splice(i - 1, 1);
          } else {
            modArr.splice(i, 1);
          }
        }
        if (modArr[i] === '--double-next') {
          if (modArr[i + 1]) {
            modArr.splice(i + 1, 0, modArr[i + 1]);
            modArr.splice(i, 1);
          } else {
            modArr.splice(i, 1);
          }
        }
        if (modArr[i] === '--double-prev') {
          if (modArr[i - 1] && typeof modArr[i - 1] !== 'string') {
            modArr.splice(i - 1, 0, modArr[i - 1]);
            modArr.splice(i + 1, 1);
          } else if (typeof modArr[i - 1] === 'string') {
            modArr.splice(i, 1);
            modArr.splice(i - 1, 1);
          } else {
            modArr.splice(i, 1);
          }
        }
      }
    }
    return modArr;
  } else {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform
};
