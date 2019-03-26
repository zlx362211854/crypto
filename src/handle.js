import {encryptDES, decryptDES} from './kit.js';
const encrypt = function() {
  const text = document.getElementById('crypto-text');
  const key = document.getElementById('crypto-key');
  if (text && key) {
    const textVal = text.value;
    const keyVal = key.value;
    if (textVal && keyVal) {
      const val = encryptDES(textVal, keyVal);
      console.log(textVal, keyVal, val, '加密')
      let resDom = document.getElementById('encrypt-result');
      if (!resDom) {
        resDom = document.createElement('p');
        resDom.setAttribute('id', 'encrypt-result');
        resDom.innerHTML = '加密后的结果是：' + val;
        document.getElementById('crypto-contanier').appendChild(resDom);
      } else {
        resDom.innerHTML = '加密后的结果是：' + val;
      }
    }
  }
}
const decrypt = function() {
  const text = document.getElementById('decrypt-text');
  const key = document.getElementById('decrypt-key');
  if (text && key) {
    const textVal = text.value;
    const keyVal = key.value;
    if (textVal && keyVal) {
      const val = decryptDES(textVal, keyVal);
      console.log(textVal, keyVal, val, '解密')
      let resDom = document.getElementById('decrypt-result');
      if (!resDom) {
        resDom = document.createElement('p');
        resDom.setAttribute('id', 'decrypt-result');
        resDom.innerHTML = '解密后的结果是：' + val;
        document.getElementById('decrypt-contanier').appendChild(resDom);
      } else {
        resDom.innerHTML = '解密后的结果是：' + val;
      }
    }
  }
}
const cryptoSubmit = document.getElementById('crypto-submit');
cryptoSubmit.addEventListener('click', function(e) {
  encrypt()
})  
const decryptSubmit = document.getElementById('decrypt-submit');
decryptSubmit.addEventListener('click', function(e) {
  decrypt()
})  

