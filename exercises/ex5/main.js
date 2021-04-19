
let big = null;
let small = null;

let x = 0;
let y = 0;


const moveBlock = (block, dx, dy, speed ) => {
  
  const maxX = big.clientWidth - block.offsetWidth;
  const maxY = big.clientHeight - block.offsetHeight;


  x += dx * speed;
  y += dy * speed;
  x = Math.max(0, Math.min(maxX, x));
  y = Math.max(0, Math.min(maxY, y));

  block.style.transform = "translate(" + x + "px," + y + "px)";
}

window.addEventListener("load", () => {

  small = $("div", {
    className: "small"
  });

  big = $("div", {
    className: "big"
  }, small);


  document.body.append(big);

  window.addEventListener("keydown", (event) => {

    let speed = event.shiftKey ? 30 : 10;

    switch(event.code) {
      case "KeyW": {
        moveBlock(small, 0, -1, speed);
        event.preventDefault();
      } break;
      
      case "KeyS": {
        moveBlock(small, 0, 1, speed);
        event.preventDefault();
      } break;
      
      case "KeyA": {
        moveBlock(small, -1, 0, speed);
        event.preventDefault();
      } break;
      
      case "KeyD": {
        moveBlock(small, 1, 0, speed);
        event.preventDefault();
      } break;
      
    }
  });

});




