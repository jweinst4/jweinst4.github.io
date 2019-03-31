



let canvas = document.createElement('canvas');

canvas.id = "DemoCanvas";
canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";

var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

let ctx = canvas.getContext("2d");
let circleCounter = 0;
let numberOfSteps = 360;

let h = 450;
let k = 250;
let r = 150;

let currentSpotX = [];
let currentSpotY = [];
let currentIndex = 0;

for (let i = 0; i < numberOfSteps; i++)
{
  circleCounter++;
    
        //https://www.mathopenref.com/coordcirclealgorithm.html
        let step = 2 * Math.PI / numberOfSteps;  // see note 1

        ctx.beginPath();  //tell canvas to start a set of lines

        if (circleCounter !== 1)
        {
          for(let theta = 0;  theta < 2 * Math.PI;  theta += step)
          { let x = h + r * Math.cos(theta);
            let y = k - 0.5 * r * Math.sin(theta);    //note 2.
            ctx.lineTo(x,y);
          }
        }
        else
        {
          for(let theta=0;  theta < 2 * Math.PI;  theta += step)
          { 
            let x = h + r * Math.cos(theta);
            let y = k - 0.5 * r * Math.sin(theta);    //note 2.
            ctx.lineTo(x,y);
            currentSpotX[currentIndex] = x;
            currentSpotY[currentIndex] = y;
            currentIndex ++;
          }
        }
      ctx.strokeStyle = "white";
      ctx.closePath();     //close the end to the start point
      ctx.stroke();        //actually draw the accumulated lines
}

let hObject1 = 150;
let kObject1 = 150;
let rObject1 = 50;
let thetaObject1 = 0;
let object1NumberOfSteps = 20;
let object1StepIncrementer = Math.floor(numberOfSteps / object1NumberOfSteps);
let object1Index = 0;
let xObject1 = 0;
let uObject1 = 0;
let object1StartX = 0;
let object1StartY = 0;
let object1Radius = 45;
let object1Color = "red";
let priorObject1StartX = 0;
let priorObject1StartY = 0;
let i = 0;
let totalRotations = 0;
let totalRotationLimit = 100;
let animationCounter = 0;
let animationInterval = 600;
let totalAnimationIterations = 10000;
let rotationCounter = 0;
let startAngle = 0;
let endAngle = 0;
let startAngleMultiplier = 0;
let endAngleMultiplier = 2;
let colorStop1 = 0;
let colorStop2 = 0;
let colorStop3 = 0;
let firstStop = 0;
let lastStop = 0;
let gradient = "";

function movingObject () 
{

  if (object1StartX < currentSpotX[((object1Index % 360))])
  {
    object1Radius *= 1.3;
  }
  else
  {
    object1Radius /= 1.3;
  }


  if (object1StartY < currentSpotY[((object1Index % 360))])
  {
    object1Radius *= 1.3;
  }
  else
  {
    object1Radius /= 1.3;
  }
  
    object1StartX = currentSpotX[((object1Index % 360))];
    object1StartY = currentSpotY[((object1Index % 360))];
    
    if (animationCounter !== 0)
    {
      /*
      priorObject1StartX = currentSpotX[((object1Index - object1StepIncrementer) % 360)];
      priorObject1StartY = currentSpotY[((object1Index - object1StepIncrementer) % 360)] ;

      ctx.beginPath();
      ctx.arc(priorObject1StartX, priorObject1StartY, object1Radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      */
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.fillRect(0, 0, 1000, 1000);
    }
    else
    {

    }

        colorStop1 = Math.random();
        colorStop2 = Math.random();
        colorStop3 = Math.random();
      
        firstStop = Math.max(colorStop1,colorStop2,colorStop3);
        //lastStop = Math.max(colorStop1,colorStop2,colorStop3);

        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
          
        gradient = ctx.createRadialGradient(object1StartX + 0, object1StartY + 0, object1Radius * 0.3, object1StartX + 0, object1StartY + 0, object1Radius);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.9, "yellow");

/*
        if (animationCounter % 4 === 0)
        {
          startAngleMultiplier = 0;
          endAngleMultiplier = 2;
        }
        else if (animationCounter % 4 === 1)
        {
          startAngleMultiplier = 0;
          endAngleMultiplier = 2;
          gradient = ctx.createRadialGradient(object1StartX, object1StartY, object1Radius * 0.3, object1StartX, object1StartY, object1Radius * 0.7);
          gradient.addColorStop(0, "blue");
          gradient.addColorStop(0.25, "red");
        }
        else if (animationCounter % 4 === 2)
        {
          startAngleMultiplier = 0;
          endAngleMultiplier = 2;
          gradient = ctx.createRadialGradient(object1StartX, object1StartY, object1Radius * 0.3, object1StartX, object1StartY, object1Radius * 0.7);
          gradient.addColorStop(0, "blue");
          gradient.addColorStop(0.5, "red");
        }
        else
        {
          startAngleMultiplier = 0;
          endAngleMultiplier = 2;
          gradient = ctx.createRadialGradient(object1StartX, object1StartY, object1Radius * 0.3, object1StartX, object1StartY, object1Radius * 0.7);
          gradient.addColorStop(0, "blue");
          gradient.addColorStop(0.75, "red");
        }
*/
        startAngle = startAngleMultiplier * Math.PI;
        endAngle = endAngleMultiplier * Math.PI;

     
   
        
        ctx.beginPath();
        ctx.arc(object1StartX, object1StartY, object1Radius, startAngle, endAngle);
        ctx.fillStyle = gradient;
        ctx.strokeStyle = gradient;
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.closePath();
        
        // let gradient2 = ctx.createRadialGradient(object1StartX + 0, object1StartY + 0, object1Radius * 0.3, object1StartX + 0, object1StartY + 0, object1Radius);
        // gradient2.addColorStop(0, "black");
        // gradient2.addColorStop(1, "white");
        // ctx.fillStyle = gradient2;
        // ellipse(object1StartX, object1StartY, 100, 60);
      



        // ctx.transform(1.5,0,0,0.5,1,1);
        // ctx.beginPath();
        // ctx.arc(object1StartX, object1StartY, object1Radius, startAngle, endAngle);
        // ctx.fillStyle = gradient;
        // ctx.strokeStyle = gradient;
        // ctx.fill();
        // ctx.stroke();
        // ctx.fillStyle = "white";
        // ctx.strokeStyle = "white";
        // ctx.closePath();

        ctx.beginPath();
        ctx.ellipse(object1StartX, object1StartY, object1Radius * 1.5,object1Radius * 0.5,0,0,Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.strokeStyle = gradient;
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.closePath();

        object1Index += object1StepIncrementer;
    
        if (animationCounter >= object1NumberOfSteps)
        {
          animationCounter = 0;
          totalRotations++;
          debugger;  
        }    
}

const interval = setInterval(draw, animationInterval);

function draw()
{
  animationCounter++;

  // Stop our draw setInterval
  if (animationCounter > totalAnimationIterations)
  clearInterval(interval);

  movingObject();

  if (totalRotations === totalRotationLimit)
  {
    i = 1000;
  }
}