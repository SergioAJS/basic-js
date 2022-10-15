const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direction) {
    this.direction = direction;
  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arrUnTrim = [];
    let arrMes = [];
    let arrKey = [];
    let arrRes = [];
    let strRes = [];

    message = message.toUpperCase();

    arrUnTrim = message.split('');

    let trimMessage = message.replace(/(\d*)(\W*)/g, '');

    key = key.toUpperCase();

    if (trimMessage.length > key.length) {
      key = key.padEnd(trimMessage.length, key);
    }

    for (let i = 0; i < trimMessage.length; i++) {
      arrMes.push(trimMessage.charCodeAt(i));
      arrKey.push(key.charCodeAt(i));
      if (arrMes[i] >= 65 && arrMes[i] <= 90) {
        arrRes.push((26 + (arrMes[i] + arrKey[i])) % 26);
      } else {
        arrRes.push(arrMes[i]);
      }
    }

    for (let j = 0; j < arrRes.length; j++) {
      if (arrRes[j] + 65 >= 65 && arrRes[j] + 65 <= 90) {
        strRes.push(String.fromCharCode(arrRes[j] + 65));
      } else {
        strRes.push(String.fromCharCode(arrRes[j]));
      }
    }

    for (let y = 0; y < arrUnTrim.length; y++) {
      if (arrUnTrim[y].charCodeAt(0) < 65 || arrUnTrim[y].charCodeAt(0) > 90) {
        strRes.splice(y, 0, arrUnTrim[y]);
      }
    }

    let encryptedMes = strRes.join('');

    if (this.direction === false) {
      strRes = strRes.reverse();
      encryptedMes = strRes.join('');
    }

    return encryptedMes;
  }

  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let arrUnTrim = [];
    let arrMes = [];
    let arrKey = [];
    let arrRes = [];
    let strRes = [];

    encryptedMessage = encryptedMessage.toUpperCase();

    arrUnTrim = encryptedMessage.split('');

    let trimMessage = encryptedMessage.replace(/(\d*)(\W*)/g, '');

    key = key.toUpperCase();

    if (trimMessage.length > key.length) {
      key = key.padEnd(trimMessage.length, key);
    }

    for (let i = 0; i < trimMessage.length; i++) {
      arrMes.push(trimMessage.charCodeAt(i));
      arrKey.push(key.charCodeAt(i));
      if (arrMes[i] >= 65 && arrMes[i] <= 90) {
        arrRes.push((26 + (arrMes[i] - arrKey[i])) % 26);
      } else {
        arrRes.push(arrMes[i]);
      }
    }

    for (let j = 0; j < arrRes.length; j++) {
      if (arrRes[j] + 65 >= 65 && arrRes[j] + 65 <= 90) {
        strRes.push(String.fromCharCode(arrRes[j] + 65));
      } else {
        strRes.push(String.fromCharCode(arrRes[j]));
      }
    }

    for (let y = 0; y < arrUnTrim.length; y++) {
      if (arrUnTrim[y].charCodeAt(0) < 65 || arrUnTrim[y].charCodeAt(0) > 90) {
        strRes.splice(y, 0, arrUnTrim[y]);
      }
    }

    let encryptedMes = strRes.join('');

    if (this.direction === false) {
      strRes = strRes.reverse();
      encryptedMes = strRes.join('');
    }

    return encryptedMes;
  }
}

module.exports = {
  VigenereCipheringMachine
};
