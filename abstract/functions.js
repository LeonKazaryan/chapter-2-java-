// Набор инструкции - 

// Фрагмент кода к которому можно обратиться

// Именованный фрагмент кода который может принимать и возвращаться значения

// (чистая функция FP) , процедура , (метод ООП)

// Имя + параметры . Обращаться из разных мест программы

// procedure param1 param2 
//   1
//   2
//   3
//   4

//   ??? return result

// Читабельность
// Разделять (на функции) 
// Не повторяться DRY Do not repeat yourself

const logBalance = (balance) => {
  console.log("Ваш баланс: " + balance + "тг.");

  if (balance > 0) {
    console.log("Все ок");
  } else if (balance === 0) { 
    console.log("Пусто");
  } else {
    console.log("У вас должок");
  }
}



let balance = 0; 

const changeBalance = (balance, amount) => {
  // Замыкание Closure
  
  // Отправить запрос на сервер
  // проверить что у нас все хорошо с балансом
  // наложить комисси

  return balance + amount;
}


const getTaxApplicator = (tax) => {
  return (amount) => {
    return amount * (1 + tax);
  };
}

let applyTax = getTaxApplicator(0.1);
//(amount) => {
//   return amount * (1 + 0.3); 
// }



logBalance(balance);

balance = changeBalance(balance, 1500); // balance = balance + 500;
logBalance(balance);


balance = changeBalance(balance, applyTax(-1000)); // balance = balance - 1000;
logBalance(balance);


balance = changeBalance(balance, applyTax(-200)); // balance = balance - 1000;
logBalance(balance);



balance = changeBalance(balance, applyTax(-1000)); // balance = balance - 1000;
logBalance(balance);


balance = changeBalance(balance, applyTax(-200)); // balance = balance - 1000;
logBalance(balance);



applyTax = getTaxApplicator(1);


balance = changeBalance(balance, applyTax(-1000)); // balance = balance - 1000;
logBalance(balance);


balance = changeBalance(balance, applyTax(-200)); // balance = balance - 1000;
logBalance(balance);


