// let days = 0;
let apples = [];

// функция минимума и максимума рандома
const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const getSum = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; ++i) {
      sum = sum + numbers[i];
  }
  return sum;
}

// проверка
console.log(apples);

// цикл по добавлению яблок
while(getSum(apples)<100){
    randomnumber = randomInt(-5,20);
    if (randomnumber>=0){
      console.log("Сегодня мы получили " + randomnumber + " яблок!");
    }
    else {
      console.log("Вот черт! Сегодня мы потеряли " + Math.abs(randomnumber) + " яблок :(")
    }
    
    apples.push(randomnumber);
    console.log("На данный момент наш яблочный баланс составляет " + getSum(apples) + " яблок")
}

console.log("Ура, мы накопили целых " + getSum(apples) + " яблок!")
console.log("Вот наш массив из яблок: " + apples)

let applescopy = apples;
let positivetuple = [];
let negativetuple = [];

// по идее он должен был пройти по элементам и отсортировать положительные и отрицательные 
const tuplesort = applescopy => {
  for (let i = 0; i < applescopy.length; ++i) {
      // ищем цифры для позитивного тюпла
      if (0 <= apples[i]) {
          applescopy.shift(applescopy[i]);
          positivetuple.unshift(applescopy[i]);
      }
      // ищем цифры для негативного тюпла
      else{
          applescopy.shift(applescopy[i]);
          negativetuple.unshift(applescopy[i]);
      }
  }
  return applescopy;
}
// выводим значения яблок
console.log(tuplesort(applescopy));
console.log("Позитивные яблоки: " + positivetuple);
console.log("Негативные яблоки: " + negativetuple);

// я знаю, что это нужно было засунуть в функцию, но я не знаю как это сделать правильно.
// считаем средний доход и расход яблок
console.log("Средний доход: " + (Math.round(getSum(positivetuple)/positivetuple.length)))
console.log("Средний расход: " + (Math.round(getSum(negativetuple)/negativetuple.length)))

