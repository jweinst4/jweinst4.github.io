

//formula for points on ellipse
//taken directly from https://stackoverflow.com/questions/14863188/moving-a-point-along-ellipse
let ellipseYCoordinate = 0;
let checkEllipse = function (a, b, x) {
    ellipseYCoordinate = b * Math.sqrt(1 - x*x / a * a);
}


//Animation Timing
let animationInterval = 150;

//Star Colors, Planet Colors, Background Colors
let landscapeColor = "black";
let originalStarColor = "yellow";
let starColor = originalStarColor;
let alternateStarColor = "yellow";
let sunColor = "yellow";
let groundColor = "grey";
let defaultGroundColor = "black";


//Ground Measurements
let startWidth = 0;
let startHeight = 500;
let maxGroundHeight = startHeight;
let endWidth = 0;
let endHeight = 0;
let groundThickness = 5;
let startWidthArray = [];
let startHeightArray = [];
let endWidthArray = [];
let endHeightArray = [];
let slopeArray = [];


//Star Sizes, Planet Sizes, Canvas Sizes
let canvasWidth = 1920;
let canvasHeight = 1080;
let originalStarRadius = 3;
let starRadius = originalStarRadius;
let originalSunRadius = 40;
let sunRadius = originalSunRadius;


//Starting Coordinates and Changes in Movement
let sunStartX = 100;
let sunStartY = 200;
let sunStartYMin = 60;
let originalStarStartX = 5;
let originalStarStartY = 5;
let starStartX = originalStarStartX;
let starStartY = originalStarStartY;
let starXChange = 10;
let starYChange = 10;
let maxStarHeight = 500;
let sunXChange = 10;
let sunYChange = -3;
let alternateSunYChange = -sunYChange;


//Multipliers
let randomXMultiplierMin = 7;
let randomYMultiplierMin = 7;
let randomXMultiplierMax = 13;
let randomYMultiplierMax = 13;
let starRadiusMultiplier = 1.0;

let sunRadiusMultiplier = 1.0;
//default 1.015

let randomXMultiplier = 1;
let randomYMultiplier = 1;



//Counters, Arrays and Placeholders
let initialXLocation = [];
let initialYLocation = [];
let numberOfStars = 0;
let currentXLocation = [];
let currentYLocation = [];
let currentX1Location1 = [];
let currentY1Location1 = [];
let starID = 0;
let animationCounter = 0;
let totalAnimationIterations = 100;
let groundStop = 0;
let moveThingsCounter = 0;

const interval = setInterval(draw, animationInterval);

function draw()
//while (animationCounter < totalAnimationIterations)
{
    // Stop our draw setInterval
    if (animationCounter === totalAnimationIterations)
        clearInterval(interval);

    //debugger;

    animationCounter++;
    //prepares the canvas to draw the lines

    var canvas = document.getElementById("DemoCanvas");
    var context = canvas.getContext("2d");
    var ctx = canvas.getContext("2d");


    if (canvas.getContext) 
    {
        ctx.fillStyle = landscapeColor;
        ctx.width = canvasWidth;
        ctx.height = canvasHeight;
        const context = canvas.getContext('2d');
        var backgroundColor = ctx.fillStyle;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (animationCounter === 1)
    {
        //draws the sun
        context.beginPath();
        context.arc(sunStartX, sunStartY, sunRadius, 0, 2 * Math.PI);
        context.fillStyle = sunColor;
        context.strokeStyle = sunColor;
        context.fill();
        context.stroke();

        sunStartX += sunXChange;
        sunStartY += sunYChange;





        while (startWidth < canvasWidth)
        {

            groundStop++;
            randomGroundWidth = Math.floor((Math.random() * 30) + 20);
            randomGroundHeight = Math.floor((Math.random() * 30) + 20);

            if (groundStop % 2 === 0)
            {
                randomGroundHeight = -randomGroundHeight;
            }

            endWidth = startWidth + randomGroundWidth;
            endHeight = startHeight + randomGroundHeight;
            //draws the new line on the ground

            context.beginPath();
            context.moveTo(startWidth,startHeight);
            context.lineWidth = groundThickness;
            context.lineTo(endWidth,endHeight);
            context.strokeStyle = groundColor;
            context.stroke();
            context.lineWidth = 1;
            context.strokeStyle = defaultGroundColor;

            slopeArray.push((endHeight - startHeight) / (endWidth - startWidth));

            startWidthArray.push(startWidth);
            startHeightArray.push(startHeight);


            startWidth = endWidth;
            startHeight = endHeight;

            endWidthArray.push(endWidth);
            endHeightArray.push(endHeight);


            if (endHeight < maxGroundHeight) {
                maxGroundHeight = endHeight;
            }

            //checks to make sure our drawing is still within the canvaas
            if (endWidth > canvasWidth) {
                break;
            }
        }





        for (starStartX = originalStarStartX; starStartX <= canvasWidth; starStartX += starXChange)
        {
            starStartY = originalStarStartY;

            for (starStartY = originalStarStartY; starStartY <= maxStarHeight; starStartY += starYChange)
            {
                randomXMultiplier = (Math.floor(Math.random() * randomXMultiplierMax) + randomXMultiplierMin) / 10;
                randomYMultiplier = (Math.floor(Math.random() * randomYMultiplierMax) + randomYMultiplierMin) / 10;
                context.beginPath()
                context.arc(starStartX * randomXMultiplier, starStartY * randomYMultiplier, starRadius, 0, 2 * Math.PI);
                context.fillStyle = starColor;   
                context.fill();
                context.stroke();

                initialXLocation[starID] = starStartX * randomXMultiplier;
                initialYLocation[starID] = starStartY * randomYMultiplier;
                starID++;

                if (starStartY * randomYMultiplier >=  maxStarHeight)
                {
                    starStartY = 100000;
                }

                if(starStartX * randomXMultiplier >= canvasWidth)
                {
                    starStartX = 100000;
                    starStartY = 100000;
                    numberOfStars = initialXLocation.length;
                }
            }     
        }


        currentXLocation = initialXLocation;
        currentYLocation = initialYLocation;


    }
    else 

    {       
        numberOfStars = currentXLocation.length;
        currentX1Location1 = [];
        currentY1Location1 = [];

        if (animationCounter % 2 === 0)
        {
            sunRadius = sunRadius * sunRadiusMultiplier;
            starRadius = originalStarRadius * starRadiusMultiplier;
            starColor = alternateStarColor;
        }

        else
        {
            sunRadius = sunRadius * sunRadiusMultiplier;
            starRadius = originalStarRadius;
            starColor = originalStarColor;
        }

        if ((sunStartX > canvasWidth / 2) || (sunStartY < sunStartYMin))
        {
            sunYChange = alternateSunYChange;
        }




        //draws the sun

        //let sunStartY = checkEllipse(10, 10, sunStartX);
        if (sunStartX < canvasWidth / 10)
        {
         sunRadius *= 1.03;
        }

        else if (sunStartX < canvasWidth / 8)
        {
        sunRadius *= 1.02;
        }

        else if (sunStartX < 3 * (canvasWidth / 6))
        {
        sunRadius *= 1.008;
        }

        else
        {
        sunRadius *= 1.005;
        }



        context.beginPath();
        context.arc(sunStartX, sunStartY, sunRadius, 0, 2 * Math.PI);
        context.fillStyle = sunColor;
        context.strokeStyle = sunColor;
        context.fill();
        context.stroke();

        

        sunStartX += sunXChange;
        sunStartY += sunYChange;

        for (i = 0; i < groundStop; i++)
        {
            context.beginPath();
            context.moveTo(startWidthArray[i],startHeightArray[i]);
            context.lineWidth = groundThickness;
            context.lineTo(endWidthArray[i],endHeightArray[i]);
            context.strokeStyle = groundColor;
            context.stroke();
            context.lineWidth = 1;
            context.strokeStyle = defaultGroundColor;
        }


        for (let i = 0; i < numberOfStars; i++)
        {

            randomXMultiplier = (Math.floor(Math.random() * randomXMultiplierMax) + randomXMultiplierMin) / 10;
            randomYMultiplier = (Math.floor(Math.random() * randomYMultiplierMax) + randomYMultiplierMin) / 10;

            if (animationCounter % 2 === 0)
            {
                randomYMultiplier *= -1;
            }

            context.beginPath()
            context.arc(currentXLocation[i] + randomXMultiplier * starXChange, currentYLocation[i] + randomYMultiplier * starYChange, starRadius, 0, 2 * Math.PI);
            context.fillStyle = starColor;   
            context.fill();
            context.stroke();

            currentX1Location1[i] = currentXLocation[i] + randomXMultiplier * starXChange;
            currentY1Location1[i] = currentYLocation[i] + randomYMultiplier * starYChange;
        }

        currentXLocation = [];
        currentYLocation = [];
        currentXLocation = currentX1Location1;
        currentYLocation = currentY1Location1;


        for (starStartY = originalStarStartY; starStartY * randomYMultiplier <= maxStarHeight; starStartY += starYChange)
        {
            randomXMultiplier = (Math.floor(Math.random() * randomXMultiplierMax) + randomXMultiplierMin) / 10;
            randomYMultiplier = (Math.floor(Math.random() * randomYMultiplierMax) + randomYMultiplierMin) / 10;

            context.beginPath()
            context.arc(originalStarStartX * randomXMultiplier, starStartY * randomYMultiplier, starRadius, 0, 2 * Math.PI);
            context.fillStyle = starColor;   
            context.fill();
            context.stroke();
            starID++;

            currentXLocation.push(originalStarStartX * randomXMultiplier);
            currentYLocation.push(starStartY * randomYMultiplier);
        }

    }

}