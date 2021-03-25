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
//ниже это уже не я проектировал
const isPalindromRecursive = string => {
  if (string.length === 0 || string.length === 1) {
    return true;
  } else {
    return string[0] === string[string.length - 1] && isPalindromRecursive(string.slice(1, -1))
  }
}

// console.log("-------------------------")

const numberElementsSumRecursive = (number) => {
  if (number == 0) {
    return 0;
  } else {
    return (number % 10) + numberElementsSumRecursive(Math.trunc(number / 10));
  }
}

// console.log("-------------------------")

const permutations = string => {
  
  if (string.length === 0) {
    return [];
  } else if (string.length === 1) {
    return [string]; // Один символ
  } else {
    const p = [];

    for (let index = 0; index < string.length; index++) {
      const char = string[index];
      const remaining = string.slice(0, index) + string.slice(index + 1);

      const subpermutations = permutations(remaining);

      p.push(...subpermutations.map(permutation => char + permutation));
    }

    return p;

    // return string.split("")
    //   .map((char, index) => 
    //     permutations(string.slice(0, index) + string.slice(index + 1))
    //       .map(p => char + p)
    //   )
    //   .flat(1);

  }
} 

console.log(permutations(""));

console.log("-------------------------")

console.log(permutations("a"));

console.log("-------------------------")

console.log(permutations("bc"));

console.log("-------------------------")

console.log(permutations("abc"));

console.log("-------------------------")