
// 

let s = "abcd";

let length = 20;
let char = "*";

while(s.length < length) {

    s += char

}

// вариант через for
for (; s.length < length;) {
    s += char;
}


console.log(s);


// вывести числа от 10 до 1 в обратном порядке
for( let i = 10; i>=0; i--){
    console.log(i);
  }
  
// вывести пирамидку
  let n = 6
  let o = 1;

  while(o.length<n){
      console.log(0);
      o += "*";
  }


//   вывести пирамидку с цифрами

// 1
// 22
// 333
// 4444
// 55555
// 666666

for (let i = 1; i <= n; i++) {      //вывести строчку n раз
  let str = "";                     //создает пустую строчку
  for (let j = 0; j < i; j++) {     //наполняет ее    
    str += i;                       
  }
  console.log(str);
}

