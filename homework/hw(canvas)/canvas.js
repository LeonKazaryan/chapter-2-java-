const draw = (canvas) => {

  /**
   * @type {CanvasRenderingContext2D}
   */
  const context = canvas.getContext("2d"); // webgl webgl2
  let Pi = Math.PI*25;
  function CreateTriangle(){
    context.beginPath();
    context.moveTo(25,0);
    context.lineTo(0,25);
    context.lineTo(50,25);
    context.fill();
    context.closePath();
  }
  let y = 25;
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
  context.translate(700,200);
  CreateSemicircle();
  context.scale(-1,1);
  context.translate(-(2*y),-(6*y));
  CreateSemicircle()



  

  



  console.log(context);

}