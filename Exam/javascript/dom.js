/**
 * 
 * @param {*} tag 
 * @param {*} attributes 
 * @param  {...any} children 
 * @returns {HTMLElement}
 */
 const $ = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);

  Object.entries(attributes)
    .forEach(([key, value]) => {
      if (key === "style") {
        Object.entries(value).forEach(([cssKey, cssValue]) => {
          element.style[cssKey] = cssValue;
        });
      } else if (key.startsWith("on")) { // Строка начинается с "on" 
        element.addEventListener(key.slice(2), value);
      } else if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else {
        element[key] = value;
      }

    });

  element.append(...children);

  return element;
}

// создание массива
const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));

// рандомное число
  const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));


  const getContentBox = (element) => {
    const style = window.getComputedStyle(element); // Получаем расчитанный текущий стиль элемента
    
    // NOTE: предпологаем, что паддинги заданы в пикселях
    const paddingTop = parseInt(style.paddingTop);
    const paddingBottom = parseInt(style.paddingBottom);
    const paddingLeft = parseInt(style.paddingLeft);
    const paddingRight = parseInt(style.paddingRight);
    
    return [
      element.clientWidth - paddingRight - paddingLeft,
      element.clientHeight - paddingTop - paddingBottom
    ];
  }

// throttle
// Выполнять обработчик не чаще чем раз в N ms
const throttle = func => delay => {
  let timerId = null;

  return (...args) => {
    if (timerId === null) {
      // func(...args);
      timerId = setTimeout(() => {
        timerId = null;
        func(...args);
      }, delay);
    }
  };
}


const $fetch = async (url, method = "GET", body = null) => {
  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null
  }); 

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    return response.status + " " + response.statusText;
  }
}

//рандомная буква
function randomLetter(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(randomLetter(3));
