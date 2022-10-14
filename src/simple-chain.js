const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: new Array,

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || this.chain.length < position) {
      this.chain = [];
      throw new Error ("You can\'t remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;  },
  finishChain(chain) {
    let str = '';
    str = str + this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
