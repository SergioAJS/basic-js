const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof str !== 'string' && str !== undefined) {
    str = String(str);
  }

  if (typeof options.addition !== 'string' && options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if (!(options.separator)) {
    options.separator = '+';
  }

  if (!(options.additionSeparator)) {
    options.additionSeparator = '|';
  }

  let add = options.addition;
  let addLength = 0;

  if (add) {
    add = add.padEnd(add.length + (options.additionSeparator.length), options.additionSeparator);
    if (options.additionRepeatTimes) {
      add = add.repeat(options.additionRepeatTimes);
    }
    add = add.slice(0, add.length - (options.additionSeparator).length)
    addLength = add.length;
  }

  str = str.padEnd(str.length + addLength, add);
  str = str.padEnd(str.length + (options.separator).length, options.separator);

  if (options.repeatTimes) {
    str = str.repeat(options.repeatTimes);
  }

  str = str.slice(0, str.length - (options.separator).length);

  return str;
}

module.exports = {
  repeater
};
