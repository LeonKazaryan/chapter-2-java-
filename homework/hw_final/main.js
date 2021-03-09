
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
while(getSum(apples) < 100){
    const randomnumber = randomInt(-5, 20);
    if (randomnumber >= 0){
      console.log("Сегодня мы получили " + randomnumber + " яблок!");
    } else {
      console.log("Вот черт! Сегодня мы потеряли " + Math.abs(randomnumber) + " яблок :(")
    }
    
    apples.push(randomnumber);
    console.log("На данный момент наш яблочный баланс составляет " + getSum(apples) + " яблок")
}

console.log("Ура, мы накопили целых " + getSum(apples) + " яблок!")
console.log("Вот наш массив из яблок: " + apples)

console.log("-------------------")

console.log("Позитивные яблоки при помощи фильтра: " + apples.filter(apple => apple > 0 ));
console.log("Позитивные яблоки при помощи фильтра: " + apples.filter(apple => apple < 0 ));

console.log("-------------------")

// let applescopy = apples;
let positives = [];
let negatives = [];

// по идее он должен был пройти по элементам и отсортировать положительные и отрицательные 
const tuplesort = apples => {
  // for (let i = 0; i < apples.length; ++i) {
    while (apples.length > 0) {
      // ищем цифры для позитивного тюпла
      let apple = apples.shift();
      
      if (apple >= 0) {
          // 1 2 3
          // 1 | 2 3
          // [1]
          positives.unshift(apple);
      }
      // ищем цифры для негативного тюпла
      else {
        negatives.unshift(apple);
      }
    }

    if (negatives.length === 0){
      console.log("Нефигасе, у вас не было минусовых операций!")
    }
    else{
      console.log("Ваше количество минусовых транзакций: " + negatives.length)
    }

  return apples;
}


// выводим знначения яблок 
console.log(tuplesort(apples));
console.log("Позитивные яблоки: " + positives);
console.log("Негативные яблоки: " + negatives);


// считаем средний доход и расход яблок
console.log("Средний доход: " + (Math.round(getSum(positives)/positives.length)));
console.log("Средний расход: " + (Math.round(getSum(negatives)/negatives.length)));


console.log(apples);


