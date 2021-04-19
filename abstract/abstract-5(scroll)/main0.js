// debounce
// "накапливаем события" пока они не перестанут проиходить в течении N ms
const debounce = func => delay => {
  let timerId = null;


  return (...args) => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(() => {
      func(...args)
      timerId = null;
    }, delay);
  }
}



// throttle
// Выполнять обработчик не чаще чем раз в N ms




window.addEventListener("load", () => {

  const debouncedHandler = debounce((event) => {
    document.body.style.backgroundColor = "hsl(" + randomInt(0, 359) + ", 100%, 80%)";

    console.log(event, window.scrollX, window.scrollY);
  }) (500);

  window.addEventListener("scroll", debouncedHandler);


  window.addEventListener("resize", debouncedHandler);

  // window.addEventListener("mousewheel", (event) => {
  //   console.log(event);
  // });

});