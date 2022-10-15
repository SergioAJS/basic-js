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

    // console.log(arrUnTrim)

    // for (let t = 0; t < message.length; t ++) {
    //   arrUnTrim.push(message)
    // }

    let trimMessage = message.replace(/(\d*)(\W*)/g, '');

    key = key.toUpperCase();

    if (trimMessage.length > key.length) {
      key = key.padEnd(trimMessage.length, key);
    }

    // console.log(key);

    // let arrKey2 = [];

    // for (let e = 0; e < message.length; e++) {
    //   arrMes.push(message.charCodeAt(e));
    //   arrKey.push(key.charCodeAt(e));

    //   if (arrMes[e] >= 65 && arrMes[e] <= 90) {
    //     // arrKey2.push(key.charCodeAt(e));
    //   }
    //   else {
    //     arrKey2.push(key.slice(0, e) + message.charAt(e) + key.slice(e));
    //   }
    // }

    // console.log(arrKey2, arrMes)


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
    // console.log(arrMes, arrKey);
    // console.log(this.direction);
    // console.log(strRes, arrUnTrim[6].charCodeAt(0));

    for (let y = 0; y < arrUnTrim.length; y++) {
      if (arrUnTrim[y].charCodeAt(0) < 65 || arrUnTrim[y].charCodeAt(0) > 90) {
        // console.log('hello');
        strRes.splice(y, 0, arrUnTrim[y]);
      }
    }

    // console.log(strRes)

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

  }
}

module.exports = {
  VigenereCipheringMachine
};
