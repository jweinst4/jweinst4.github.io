

//Animation
let animationInterval = 450;
let animationCounter = 0;
let totalAnimationIterations = 200;

//Asteroid
let asteroidCounter = 30;
let asteroidStartX = 0;
let asteroidStartY = 0;
let asteroidEndX = 0;
let asteroidEndY = 0;
let asteroidWidth = 5;

//Star Colors, Planet Colors, Background Colors
let landscapeColor = "black";
let originalStarColor = "yellow";
let starColor = originalStarColor;
let alternateStarColor = "yellow";
let sunColor = "yellow";
let groundColor = "pink";
let defaultGroundColor = groundColor;
let asteroidColor = "red";


//Ground Measurements
let startWidth = 0;
let startHeight = 600;
let maxGroundHeight = startHeight;
let endWidth = 0;
let endHeight = 0;
let groundThickness = 5;
let startWidthArray = [];
let startHeightArray = [];
let endWidthArray = [];
let endHeightArray = [];
let slopeArray = [];
let lastSlope = 0;
let yIntercept = 0;
let lastXChange = 0;

//Star Sizes, Planet Sizes, Canvas Sizes
let canvasWidth = 1920;
let canvasHeight = 1080;
let originalStarRadius = 3;
let starRadius = originalStarRadius;
let originalSunRadius = 40;
let sunRadius = originalSunRadius;


//Starting Coordinates and Changes in Movement
let sunStartX = Math.floor(Math.random() * 420) + 30;
let sunStartY = Math.floor(Math.random() * 700); + 30;
let sunPaddingFromTop = 30;
let sunStartYMin = 60;
let originalStarStartX = 5;
let originalStarStartY = 5;
let starStartX = originalStarStartX;
let starStartY = originalStarStartY;
let starXChange = 20;
let starYChange = 10;
let maxStarHeight = 500;
let sunXChange = 8;
let sunYChange = -5;
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


//Black Hole
let whenToStartBlackHoleCounter = 60;
let whenToStartBlackHoleToggle = false;
let blackHoleStartX = Math.floor(Math.random() * (canvasWidth-100)) + 30;
let blackHoleStartY = Math.floor(Math.random() * 500) + 30;
let blackHoleRadiusX = 20;
let blackHoleRadiusY = 10;
let blackHoleIterations = 0;
let blackHoleColor = "black";


//Counters, Arrays and Placeholders
let initialXLocation = [];
let initialYLocation = [];
let numberOfStars = 0;
let currentXLocation = [];
let currentYLocation = [];
let currentX1Location1 = [];
let currentY1Location1 = [];
let starID = 0;
let groundStop = 0;
let moveThingsCounter = 0;


//logo
let logoColor = "red";
let logoFont = "48px Amatic SC";
let logoText = "JSW 2019";
let logoStartWidth = canvasWidth - 400;
let logoStartHeight = 50;


//create the Canvas
//https://stackoverflow.com/questions/10652513/html5-dynamically-create-canvas
    let canvas = document.createElement('canvas');

    canvas.id = "DemoCanvas";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";


    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);

    demoCanvas = document.getElementById("DemoCanvas");

    console.log(demoCanvas);


//sets the amount of time between each run
const interval = setInterval(draw, animationInterval);


//starts the Landscape
function draw()
{
    // Stop our draw setInterval
    if (animationCounter === totalAnimationIterations)
        clearInterval(interval);

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
                context.strokeStyle = "black";
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

        context.fillStyle = logoColor;
        context.font = logoFont;
        context.fillText(logoText,logoStartWidth,logoStartHeight);

        numberOfStars = currentXLocation.length;
        currentX1Location1 = [];
        currentY1Location1 = [];

        if (animationCounter % 2 === 0)
        {
            starRadius = originalStarRadius * starRadiusMultiplier;
            starColor = alternateStarColor;
        }

        else
        {
            starRadius = originalStarRadius;
            starColor = originalStarColor;
        }

        sunStartYMin = sunRadius;
        if (sunStartY < (sunStartYMin + sunPaddingFromTop))
        {
            sunYChange = alternateSunYChange;
        }

        //draws the sun

        if (sunStartX < canvasWidth / 8)
        {
         sunRadius *= 1.02;
        }

        else if (sunStartX < canvasWidth / 6)
        {
        sunRadius *= 1.01;
        }

        else if (sunStartX < 3 * (canvasWidth / 2))
        {
        sunRadius *= 1.005;
        }

        else
        {
        sunRadius *= 1.002;
        }

        context.beginPath();
        context.arc(sunStartX, sunStartY, sunRadius, 0, 2 * Math.PI);
        context.fillStyle = sunColor;
        context.strokeStyle = sunColor;
        context.fill();
        context.stroke();
        context.strokeStyle = "black";

        sunStartX += sunXChange;
        sunStartY += sunYChange;

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
            context.strokeStyle = "black";   
            context.fill();
            context.stroke();
            starID++;

            currentXLocation.push(originalStarStartX * randomXMultiplier);
            currentYLocation.push(starStartY * randomYMultiplier);
        }





        for (i = 0; i < groundStop; i++)
        {
            context.beginPath();
            context.moveTo(startWidthArray[i],startHeightArray[i]);
            context.lineWidth = groundThickness;
            context.lineTo(endWidthArray[i],endHeightArray[i]);
            context.lineTo(0,canvasHeight);
            context.closePath();
            context.strokeStyle = groundColor;
            context.stroke();
            context.fillStyle = groundColor;
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = defaultGroundColor;
        }

        if (animationCounter % asteroidCounter === 0)
        {
         
            asteroidStartX = Math.floor(Math.random() * canvasWidth);
            asteroidStartY = Math.floor(Math.random() * canvasHeight);
            asteroidEndX = Math.floor(Math.random() * canvasWidth);
            asteroidEndY = Math.floor(Math.random() * canvasHeight);
            
            context.beginPath();
            context.moveTo(asteroidStartX,asteroidStartY);
            context.lineWidth = asteroidWidth;
            context.lineTo(asteroidEndX,asteroidEndY);
            context.strokeStyle = asteroidColor;
            context.stroke();
            context.lineWidth = 1;
            context.strokeStyle = asteroidColor;

        }

        
    
        lastXChange = canvasWidth - startWidthArray[startWidthArray.length - 1];
        yIntersect = lastXChange + endHeightArray[endHeightArray.length - 1];
        context.beginPath();
        context.moveTo(canvasWidth, yIntersect);
        context.lineTo(canvasWidth,canvasHeight);
        context.lineTo(0,canvasHeight);
        context.closePath();
        context.strokeStyle = groundColor;
        context.stroke();
        context.fillStyle = groundColor;
        context.fill();
        context.fillStyle = "red";
        context.StrokeStyle = "red";


        if ((animationCounter % whenToStartBlackHoleCounter === 0 )|| (whenToStartBlackHoleToggle === true))
        {
            blackHoleIterations++;

            if (blackHoleIterations < 10)
            {
                whenToStartBlackHoleToggle = true;
                blackHoleRadiusX *= 1.05;
                blackHoleRadiusY *= 1.05;

                // Draw the ellipse
                context.beginPath();
                context.ellipse(blackHoleStartX, blackHoleStartY, blackHoleRadiusX, blackHoleRadiusY, Math.PI / 4, 0, 2 * Math.PI);
                context.fillStyle = blackHoleColor;
                context.fill();
                context.strokeStyle = blackHoleColor;
                context.stroke();

                /*
                context.beginPath();
                context.arc(blackHoleStartX, blackHoleStartY, blackHoleRadius, 0, 2 * Math.PI);
                context.fillStyle = blackHoleColor;
                context.strokeStyle = "black";
                context.fill();
                context.stroke();
                */
            }

            else
            {
                whenToStartBlackHoleToggle = true;
                blackHoleRadiusX *= 1.05;
                blackHoleRadiusY *= 1.05;

                if (blackHoleIterations % 2 === 0) 
                {
                    blackHoleRadiusX *= 1.1;
                    blackHoleRadiusY /= 1.1;
                }

                else
                {
                    blackHoleRadiusX /= 1.1;
                    blackHoleRadiusY *= 1.1;
                }

                // Draw the ellipse
                context.beginPath();
                context.ellipse(blackHoleStartX, blackHoleStartY, blackHoleRadiusX, blackHoleRadiusY, Math.PI / 4, 0, 2 * Math.PI);
                context.fillStyle = blackHoleColor;
                context.fill();
                context.strokeStyle = blackHoleColor;
                context.stroke();

                /*
                context.beginPath();
                context.arc(blackHoleStartX, blackHoleStartY, blackHoleRadius, 0, 2 * Math.PI);
                context.fillStyle = blackHoleColor;
                context.strokeStyle = "black";
                context.fill();
                context.stroke();
                */
            }
        }

  

                
            
    }

}