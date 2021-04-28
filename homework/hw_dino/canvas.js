const draw = (canvas) => {

  /**
   * @type {CanvasRenderingContext2D}
   */
  const context = canvas.getContext("2d"); // webgl webgl2
  
function CreateDino(y){

  function CreateSquare(a,b){
    context.beginPath();
    context.fillRect(a*y,b*y, a*y, b*y);
    context.closePath();
  }

context.translate(y*0,y*10);
CreateSquare(1,7);
context.translate(y,y*3);
CreateSquare(1,6);
context.translate(y,y);
CreateSquare(1,6);
context.translate(y*0,y);
CreateSquare(2,6);
context.translate(y*2,y*11);
CreateSquare(1,1)
context.translate(y,y*-18);
CreateSquare(1,12);
context.translate(y,y*0);
CreateSquare(1,11);
context.translate(y*0,y*22);
CreateSquare(1,1);
context.translate(y,y*-23);
CreateSquare(1,11);
context.translate(y,-y);
CreateSquare(1,11);
context.translate(y,y*-3);
CreateSquare(1,13);
context.translate(y,y*-15);
CreateSquare(1,22);
context.translate(y,y*13);
CreateSquare(1,8);
context.translate(y,y*6);
CreateSquare(1,2);
context.translate(-y,y*0);
CreateSquare(1,10);
context.translate(y*0,y*23);
CreateSquare(1,1);
context.translate(y,y*-32);
CreateSquare(1,14);
context.translate(y,y*-4);
CreateSquare(1,15);
context.translate(y,y*7);
CreateSquare(1,8);
context.translate(y,y*2);
CreateSquare(1,6);
context.translate(y,y*0);
CreateSquare(1,6)
context.translate(y,y*0);
CreateSquare(1,6)
context.translate(y,y*0);
CreateSquare(1,6)
context.translate(y,y*2);
CreateSquare(1,5)
context.translate(y*-6,y*10);
CreateSquare(3,1)
context.translate(y*0,y*3);
CreateSquare(2,1)
context.translate(y*2,y);
CreateSquare(1,1)
}

// выдаем размер пикселя динозавра
CreateDino(20);
context.translate(200,-250);

function CreateCactus(y,l){
  function CreateSquare(a,b){
    context.beginPath();
    context.fillRect(a*y,b*y, a*y, b*y);
    context.closePath();
  }

  //первая рука
  context.translate(0,200);
  CreateSquare(1,9);
  context.translate(y,y*-4); 
  CreateSquare(1,12);
  context.translate(y,y*0); 
  CreateSquare(1,12);
  context.translate(y,y); 
  CreateSquare(1,12);
  context.translate(y,y*16); 
  CreateSquare(1,4);
  context.translate(y,y*0); 
  CreateSquare(1,4);

  //вторая рука
  context.translate(y*4,y*0);
  CreateSquare(2,2);
  context.translate(y*3,y*-8);
  CreateSquare(1,6);
  context.translate(y,y*-2);
  CreateSquare(1,7);
  context.translate(y,y);
  CreateSquare(1,6);
  context.translate(y,y*3);
  CreateSquare(1,4);

  // тело кактуса сснизу пошло
  context.translate(y*-9,y*-20-l*y);
  CreateSquare(1,18+l);
  
  context.translate(y,y*-2);
  CreateSquare(1,19+l);
  context.translate(y,y*0);
  CreateSquare(1,19+l);

  context.translate(y,y*2);
  CreateSquare(1,18+l);
}

CreateCactus(10,randomInt(0,20));
}

