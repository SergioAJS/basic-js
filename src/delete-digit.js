const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const str = n.toString();
  let strArr = [];
  let result;

  for (let i = 0; i < str.length; i++) {
    strArr.push(+(str.slice(0, i) + str.slice(i + 1, str.length)));
  }

  result = Math.max(...strArr);

  return result;
}

module.exports = {
  deleteDigit
};
