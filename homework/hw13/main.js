console.log("-------------------------")

function sumofnumbers (num) {
    let tmp = "" + num
    let sum = 0
    for (let i = 0; i < tmp.length; i++) 
      sum += + tmp[i]
  
    return sum
  }

console.log("Сумма чисел данного числа является: " + sumofnumbers(228))

console.log("-------------------------")

function isPalindrome(str) {
    let strReverse = str.split('').reverse().join('');
    if (strReverse === str) {
      return 'Ух-ты, ваше слово "' + str + '" является палиндромом! ^-^ ' ;
    } else {
      console.log("Ваше слово: " + str);
      console.log("Это же слово наоборот: " + strReverse)
      return "Увы, но это не палиндром. :(";
    }
  }

console.log(isPalindrome("шавыавыаыввылаш"))


console.log("-------------------------")
