console.log("начало");
window.addEventListener("load", () => {

  let container = $("div", {
    className: "container",
    style: {
      height: 500 + "px"
    }
  })

  document.body.append(container);

  function CreateCircle(){ 
    let circle = $("div", { 
    className: "circle__off"
  });
    container.append(circle);
  }
  
  let height = parseInt(container.style.height);

  console.log("Вот ваша высота элемента: " + height);

  while (height > 0) {
    CreateCircle();
    console.log("Добавил круг");
    height -= 100;
    console.log(height)
  }





  window.addEventListener("scroll", () => {
    console.log("Прокрутка");
  })

});
