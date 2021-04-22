// margin, padding
// position
// transform: translate


let containerWidth = 0;
let paddingLeft = 0;
let paddingRight = 0;
let big = null;

let small = null;
// const dx = 200; // шаг, на котоырй мы смещаем элемент
// let x = 0; // реальная позицию элемента

let currentSlide = 0;
let slides = [];

const updateContainerWidth = () => {
  const style = window.getComputedStyle(big); // Получаем расчитанный текущий стиль элемента
  
  paddingLeft = parseInt(style.paddingLeft);
  paddingRight = parseInt(style.paddingRight);
  
  containerWidth = big.clientWidth - paddingRight - paddingLeft
}


const moveSlide = (direction) => {
  slides[currentSlide].classList.remove("slide_active");
  currentSlide = Math.max(0, Math.min(currentSlide + direction, slides.length - 1));
  slides[currentSlide].classList.add("slide_active");
}

const upadatePostion = () => {

  // container.getBoundingClientRect() // Получаем объект с размерами paddingBox
  // clientWidth | clientHeight - размер contentBox + padding
  // offsetWidth | offsetHeight - размер contentBox + padding + scrollBars + borderWidth

  // container.getBoundingClientRect() -  Получаем объект с координатами относитльно левого верхнего угла viewPort
  // offsetTop | offsetLeft - координаты относительно paddingBox радоительского узла

  // const prevContainerWidth = containerWidth;

  updateContainerWidth();

  // const halfBlockWidth = block.offsetWidth / 2;

  const min = big.clientWidth - small.offsetWidth - paddingRight;
  // const max = containerWidth - block.offsetWidth;

  let x = -slides[currentSlide].offsetLeft + paddingLeft;

  console.log(x, min);

  x = Math.max(min, Math.min(paddingLeft, x));

  // x *= containerWidth / prevContainerWidth;

  console.log(x);
  
  small.style.transform = "translateX(" + x + "px)";
}


const createSlide = (index) => {
  return $("div", { 
      className: "slide", 
      style: {
        width: randomInt(150, 350) + "px",
        height: randomInt(100, 250) + "px",
      }
    }, 
    $("div", { className: "slide__content" }, index)
  );
}


window.addEventListener("load", () => {

  slides = createArray(createSlide) (10);

  small = $("div", {
    className: "block",
    // style: {
    //   transform: "translateX(-50px)",
    // }
  }, ...slides);

  big = $("div", {
    className: "container"
  }, small);



  const buttonLeft = $("div", {
    className: "button button_left",
    onclick: () => {
      moveSlide(-1);
      upadatePostion();
    }
  });
  
  const buttonRight = $("div", {
    className: "button button_right",
    onclick: () => {
      moveSlide(1);
      upadatePostion();
    }
  });

  const buttons = $("div", {
    className: "buttons",
  }, buttonLeft, buttonRight);


  document.body.append(buttons, big);
  
  big.style.height = small.offsetHeight + "px";
  updateContainerWidth();

  moveSlide(0);
});

window.addEventListener("resize", () => {
  upadatePostion();
});