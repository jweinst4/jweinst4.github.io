

//Animation
let animationInterval = 200;
let animationCounter = 0;
let totalAnimationIterations = 200;

//Asteroid
let asteroidCounter = 20;
let asteroidStartX = 0;
let asteroidStartY = 0;
let asteroidEndX = 0;
let asteroidEndY = 0;
let asteroidWidth = 5;
let asteroidColor = "red";

//Sun
let sunRadiusMultiplier = 1.003;
let sunRadiusMultiplierFirst = 1.01;
let sunRadiusMultiplierSecond = 1.006;
let sunRadiusMultiplierThird = 1.002;
let sunRadiusMultiplierFourth = 1.001;
let sunRadiusMultiplierThresholdFirst = 1 / 10;
let sunRadiusMultiplierThresholdSecond = 1 / 8;
let sunRadiusMultiplierThresholdThird = 3 / 4;
let sunRadiusMultiplierThresholdFourth = 1;
let sunColor = "yellow";
let originalSunRadius = 40;
let sunRadius = originalSunRadius;
let sunStartX = Math.floor(Math.random() * 420) + 30;
let sunStartY = Math.floor(Math.random() * 700); + 30;
let sunPaddingFromTop = 30;
let sunStartYMin = 60;
let sunXChange = 8;
let sunYChange = -5;
let alternateSunYChange = -sunYChange;

//Stars
let originalStarColor = "yellow";
let starColor = originalStarColor;
let alternateStarColor = "yellow";
let originalStarRadius = 3;
let starRadius = originalStarRadius;
let originalStarStartX = 5;
let originalStarStartY = 5;
let starStartX = originalStarStartX;
let starStartY = originalStarStartY;
let starXChange = 20;
let starYChange = 10;
let maxStarHeight = 500;

//Canvas
let landscapeColor = "black";
let canvasWidth = 1920;
let canvasHeight = 1080;

//Ground Measurements
let startWidth = 0;
let startHeight = 600;
let maxGroundHeight = startHeight;
let randomGroundWidthMin = 20;
let randomGroundHeightMin = 20;
let randomGroundWidthMax = 30;
let randomGroundHeightMax = 30;
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
let groundColor = "pink";
let defaultGroundColor = groundColor;

//Multipliers
let randomXMultiplierMin = 7;
let randomYMultiplierMin = 7;
let randomXMultiplierMax = 13;
let randomYMultiplierMax = 13;
let starRadiusMultiplier = 1.0;
let randomXMultiplier = 1;
let randomYMultiplier = 1;

//Black Hole
let whenToStartBlackHoleCounter = 40;
let whenToStartBlackHoleToggle = false;
let blackHoleStartX = Math.floor(Math.random() * (canvasWidth-100)) + 30;
let blackHoleStartY = Math.floor(Math.random() * 500) + 30;
let blackHoleRadiusX = 20;
let blackHoleRadiusY = 10;
let blackHoleRadiusXMultiplier = 1.05;
let blackHoleRadiusYMultiplier = 1.05;
let blackHoleIterations = 0;
let blackHoleColor = "black";
let blackHoleRadiusXToggleMultiplier = 1.1;
let blackHoleRadiusYToggleMultiplier = 1.5;
let blackHoleIterationAlternateAction = 10;

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
            randomGroundWidth = Math.floor((Math.random() * randomGroundWidthMax) + randomGroundWidthMin);
            randomGroundHeight = Math.floor((Math.random() * randomGroundHeightMax) + randomGroundHeightMin);

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

        if (sunStartX < canvasWidth / sunRadiusMultiplierThresholdFirst)
        {
         sunRadius *= sunRadiusMultiplierFirst;
        }

        else if (sunStartX < canvasWidth / sunRadiusMultiplierThresholdSecond)
        {
        sunRadius *= sunRadiusMultiplierSecond;
        }

        else if (sunStartX < canvasWidth / sunRadiusMultiplierThresholdThird)
        {
        sunRadius *= sunRadiusMultiplierThird;
        }

        else
        {
        sunRadius *= sunRadiusMultiplierFourth;
        }

      

        context.beginPath();
        context.arc(sunStartX, sunStartY, sunRadius, 0, 2 * Math.PI);
        context.fillStyle = sunColor;
        context.strokeStyle = sunColor;
        context.fill();
        context.stroke();
        context.strokeStyle = "black";
        //context.strokeStyle = "black";
        //important that the stroke is black here

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
            context.arc(currentXLocation[i] + randomXMultiplier * starXChange, currentYLocation[i], starRadius, 0, 2 * Math.PI);
            context.fillStyle = starColor;   
            context.fill();
            context.stroke();

            currentX1Location1[i] = currentXLocation[i] + randomXMultiplier * starXChange;
            currentY1Location1[i] = currentYLocation[i];
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



        if ((animationCounter % whenToStartBlackHoleCounter === 0 )|| (whenToStartBlackHoleToggle === true))
        {
            blackHoleIterations++;

            if (blackHoleIterations < blackHoleIterationAlternateAction)
            {
                whenToStartBlackHoleToggle = true;
                blackHoleRadiusX *= blackHoleRadiusXMultiplier;
                blackHoleRadiusY *= blackHoleRadiusYMultiplier;

                // Draw the ellipse
                context.beginPath();
                context.ellipse(blackHoleStartX, blackHoleStartY, blackHoleRadiusX, blackHoleRadiusY, Math.PI / 4, 0, 2 * Math.PI);
                context.fillStyle = blackHoleColor;
                context.fill();
                context.strokeStyle = blackHoleColor;
                context.stroke();
            }

            else
            {
                whenToStartBlackHoleToggle = true;
                blackHoleRadiusX *= blackHoleRadiusXMultiplier;
                blackHoleRadiusY *= blackHoleRadiusYMultiplier;

                if (blackHoleIterations % 2 === 0) 
                {
                    blackHoleRadiusX *= blackHoleRadiusXToggleMultiplier;
                    blackHoleRadiusY /= blackHoleRadiusYToggleMultiplier;
                }

                else
                {
                    blackHoleRadiusX /= blackHoleRadiusXToggleMultiplier;
                    blackHoleRadiusY *= blackHoleRadiusYToggleMultiplier;
                }

                // Draw the ellipse
                context.beginPath();
                context.ellipse(blackHoleStartX, blackHoleStartY, blackHoleRadiusX, blackHoleRadiusY, Math.PI / 4, 0, 2 * Math.PI);
                context.fillStyle = blackHoleColor;
                context.fill();
                context.strokeStyle = blackHoleColor;
                context.stroke();
            }
        }                   
    }
}