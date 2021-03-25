const book1 = {
    title: "Метро 2033",
    author: "Дмитрий Глуховский",
    year: 2005,
    price: 2000
  };
  
  const book2 = {
    title: "Метро 2034",
    author: "Дмитрий Глуховский",
    year: 2009,
    price: 3000
  };
  
  const book3 = {
    title: "Крестный Отец",
    author: "Марио Пьюзо",
    year:  1969,
    price: 1500,
  };
  
  const books = [book1, book2, book3];
  
  console.log(books);
  
//   массив только из цен
  const getPrices = items => items.map(item => item.price);


//   cчитает тотальную цену
  const totalCost = items => items.reduce((sum, item) => sum + item.price, 0);

  
  console.log("Вот сумма стоимости всех книг: " + totalCost(books));
  