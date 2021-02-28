
// ----
// 1 яблоко form1
// 2 яблока form2
// 3 яблока form2
// 4 яблока form2
// 5 яблок  form3
// 6 яблок  form3
// 7 яблок  form3
// 8 яблок  form3
// 9 яблок  form3
// 10 яблок form3
// xxxx11-19 яблок  form3
// xxxx20 яблок
// xxxx21 яблоко
// xxxx22 яблока
// xxxx23 яблока
// xxxx24 яблока
// xxxx25 яблок
// xxxx26 яблок
// xxxx27 яблок
// xxxx28 яблок
// xxxx29 яблок
// xxxx30 яблок


// Функция которая согласует слово с числительным 
const nNoun = (form1, form2, form3) => {
  // n + " " + (n === 1 ? singular : plural);
  return (n) => {

    let absN = Math.abs(n);

    // 123456
    let lastDigt = absN % 10;  // 6
    let secondToLastDigits = Math.trunc(absN / 10) % 10; // 12345 % 10 = 5 

    let word;
    if (secondToLastDigits === 1) {
      word = form3;
    } else {
      if (lastDigt === 1) {
        word = form1;
      } else if (2 <= lastDigt && lastDigt <= 4) {
        word = form2;
      } else {
        word = form3;
      }
    }

    return n + " " + word;
  }
}

const nApples = nNoun("яблоко", "яблока", "яблок");


const logBoxState = box => {
  console.log("В ящике " + nApples(box));

  if (box > 0) {
    console.log("Полная коробка");
  } else if (box === 0) {
    console.log("Пустая коробка");
  } else { // box < 0
    console.log("Кредитная коробка");
  }
}

let box = 0;
logBoxState(box);

box += 101;
logBoxState(box);

box -= 105;
logBoxState(box);

box += 60;
logBoxState(box);


