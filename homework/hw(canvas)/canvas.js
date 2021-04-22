const draw = (canvas) => {

  /**
   * @type {CanvasRenderingContext2D}
   */
  const context = canvas.getContext("2d"); // webgl webgl2
  
  function CreatreCircle(y){
    let Pi = Math.PI*y;

    function CreateTriangle(){
      context.beginPath();
      context.moveTo(y,0);
      context.lineTo(0,y);
      context.lineTo(2*y,y);
      context.fill();
      context.closePath();
    }

    function CreateSemicircle(){
      context.beginPath();
      CreateTriangle();
      context.translate(Pi,y);
      CreateTriangle();
      context.translate(Pi/4,2*y);
      CreateTriangle();
      context.translate(-Pi/4,2*y);
      CreateTriangle();
      context.translate(-Pi,y);
      CreateTriangle();
      context.closePath();
    }
    context.translate(490,130);
    CreateSemicircle();
    context.scale(-1,1);
    context.translate(-(2*y),-(6*y));
    CreateSemicircle();

  }

//ниже вызываем функцию по созданию круга и передаем значение размера треугольника

  CreatreCircle(25);
}