// 1 яблоко 
// 2 3 4  яблока
// 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 яблок

// 21 яблоко 
// 22 23 24 яблока
// 25 26 27 28 29 30 яблок
// 31 яблоко 
// 32 33 34 яблока 
// 35 36 37 38 39 40 яблок
// 41 яблоко


const nNounRus = (form1, form2, form3) => {
    // n + " " + (n === 1 ? singular : plural);
    return (n) => {
      let word;
  
      if (n % 10 === 1 && n % 100 !== 11) {
        word = form1;
      } else if(n % 10 === 2 || n % 10 === 3 || n % 10 === 4 ) {
        word = form2;
      } else if(n >= 5 && n <= 20) {
          word = form3;
      } else{
          word = form3;
      }
    
  
      return n + " " + word;
    }
  }
  
  const wehaveapples = (f) => (n) => {
    console.log("У нас есть " + f(n) + "!");
  }
  
  
  const printApples = wehaveapples(nNounRus("яблоко", "яблока", "яблок"));

  
  
  let apples = 1;
  printApples(apples);
  
  apples += 12;
  printApples(apples);
  
  apples += 10;
  printApples(apples);
  
  apples += 110;
  printApples(apples);

  apples += 22;
  printApples(apples);

  apples += 13;
  printApples(apples);
  
 