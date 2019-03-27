

//Animation
let animationInterval = 500;
let animationCounter = 0;
let totalAnimationIterations = 600;

//Asteroid
let asteroidCounter = 30;
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
let sunXChange = 5;
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
let starXChange = 15;
let starYChange = 10;
let maxStarHeight = 500;

//Canvas
let landscapeColor = "black";
let canvasWidth = window.outerWidth;
let canvasHeight = window.outerHeight;

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

let blackHoleStartsPullingStars = 10;
let whenToStartBlackHoleCounter = 30;
let whenToStartBlackHoleToggle = false;
let blackHoleStartX = Math.floor(Math.random() * 1000) + 300;
let blackHoleStartY = Math.floor(Math.random() * 600) + 150;
let blackHoleRadiusX = 20;
let blackHoleRadiusY = 10;
let blackHoleRadiusXMultiplier = 1.05;
let blackHoleRadiusYMultiplier = 1.05;
let blackHoleIterations = 0;
let blackHoleColor = "black";
let blackHoleRadiusXMinToggleMultiplier = 1.1;
let blackHoleRadiusYMinToggleMultiplier = 1.1;
let blackHoleRadiusXMaxToggleMultiplier = 2;
let blackHoleRadiusYMaxToggleMultiplier = 2;
let blackHoleIterationAlternateAction = 10;
let blackHoleStartXMultiplier = 1.0;
let blackHoleStartYMultiplier = 5.0;
let blackHoleRotation = Math.PI / 2;
let blackHoleStartAngle = Math.PI * 0;
let blackHoleEndAngle = Math.PI * 2;
let blackHoleRadiusAltX = 1;
let blackHoleRadiusAltY = 1;
let blackHoleRotationRandom = 0;
let endGameTriggerBlackHoleIterations = 90;



//Finale
let randomFlashPointX = 0;
let randomFlashPointY = 0;
let explosionXChange = 0;
let explosionYChange = 0;


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
let endGameTrigger = false;
let finaleTrigger = false;
let finaleColor = "blue";

//logo
let logoColor = "red";
let logoFont = "48px Amatic SC";
let logoText = "JSW 2019";
let logoStartWidth = canvasWidth - 340;
let logoStartHeight = 50;

//endLogo
let endLogoColor1 = "white";
let endLogoColor2 = "white";
let endLogoFont1 = "64px Amatic SC";
let endLogoText1 = "END";
let endLogoFont2 = "48px Amatic SC";
let endLogoText2 = "";
let endLogoStartWidth1 = 500;
let endLogoStartHeight1 = 500;
let endLogoStartWidth2 = 500;
let endLogoStartHeight2 = 540;




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
    if (animationCounter > totalAnimationIterations)
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

    if ((animationCounter === 1)  && (endGameTrigger !== true))
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

        if (endGameTrigger !== true)
        {

                   
                    if (blackHoleIterations > blackHoleStartsPullingStars)
                    {
                        if (blackHoleStartX > logoStartWidth)
                        {
                            logoStartWidth += 5;
                        }

                        else 
                        {
                            logoStartWidth -= 25;
                        }

                        if (blackHoleStartY > logoStartHeight)
                        {
                            logoStartHeight += 25;
                        }

                        else 
                        {
                            logoStartHeight -= 5;
                        }
                    }
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

                
                    if (blackHoleIterations > blackHoleStartsPullingStars)
                    {
                        if ((sunStartX > blackHoleStartX) && (blackHoleIterations > blackHoleStartsPullingStars))
                        {
                            if (sunStartX > 3 * blackHoleStartX)
                            {
                                sunStartX -= Math.floor(Math.random() * 30) + 10;
                                sunRadius /= 0.9;
                            }

                            else if (sunStartX > 1.5 * blackHoleStartX)
                            {
                                sunStartX -= Math.floor(Math.random() * 20) + 4;
                                sunRadius /= 0.9;
                            }

                            else if (sunStartX > 1.2 * blackHoleStartX)
                            {
                                sunStartX -= Math.floor(Math.random() * 10) + 3;
                                sunRadius /= 0.9;
                            }

                            else 
                            {
                                sunStartX -= Math.floor(Math.random() * 5) + 1;
                                sunRadius /= 0.9;
                            }
                        }

                        else
                        {
                            sunStartX += Math.floor(Math.random() * 12) + 6;
                        }

                        if ((sunStartY > blackHoleStartY) && (blackHoleIterations > blackHoleStartsPullingStars))
                        {
                            if (sunStartY > 3 * blackHoleStartY)
                            {
                                sunStartY -= Math.floor(Math.random() * 30) + 10;
                                sunRadius *= 0.9;
                            }

                            else if (sunStartY > 1.5 * blackHoleStartY)
                            {
                                sunStartY -= Math.floor(Math.random() * 12) + 6;
                                sunRadius *= 0.9;
                            }

                            else if (sunStartY > 1.2 * blackHoleStartY)
                            {
                                sunStartY -= Math.floor(Math.random() * 8) + 2;
                                sunRadius *= 0.9;
                            }

                            else 
                            {
                                sunStartY -= Math.floor(Math.random() * 4) + 1;
                                sunRadius *= 0.9;
                            }
                        }
                        else
                        {
                            sunStartY += Math.floor(Math.random() * 12) + 8;
                            
                        }

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

                    if (blackHoleIterations > blackHoleStartsPullingStars)
                    {

                    }

                    else
                    {
                        sunStartX += sunXChange;
                        sunStartY += sunYChange;
                    }

                    for (let i = 0; i < numberOfStars; i++)
                    {
                        randomXMultiplier = (Math.floor(Math.random() * randomXMultiplierMax) + randomXMultiplierMin) / 10;
                        randomYMultiplier = (Math.floor(Math.random() * randomYMultiplierMax) + randomYMultiplierMin) / 10;

                        if (animationCounter % 2 === 0)
                        {
                            randomYMultiplier *= -1;
                        }

                        if (blackHoleIterations > blackHoleStartsPullingStars)
                        {
                            if ((((currentXLocation[i] + randomXMultiplier * starXChange) > blackHoleStartX)) && (blackHoleIterations > blackHoleStartsPullingStars))
                            {
                                currentXLocation[i] -= Math.floor(Math.random() * 15) + 10;
                                randomXMultiplier = 0;
                            }
                            else
                            {
                                currentXLocation[i] += Math.floor(Math.random() * 8) + 3;
                            }

                            if ((currentYLocation[i] > blackHoleStartY) && (blackHoleIterations > blackHoleStartsPullingStars))
                            {
                                currentYLocation[i] -= Math.floor(Math.random() * 15) + 10;
                            }
                            else
                            {
                                currentYLocation[i] += Math.floor(Math.random() * 8) + 3;
                            }
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

                        if (whenToStartBlackHoleToggle && (blackHoleIterations > blackHoleStartsPullingStars))
                        {

                        }
                        else
                        {
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

                    
                    
                        for (i = 0; i < groundStop; i++)
                        {
                            if (blackHoleIterations > (blackHoleStartsPullingStars + 10))
                            {
                                if (startWidthArray[i] < blackHoleStartX)
                                {
                                    startWidthArray[i] *= 1.4;
                                }

                                else
                                {
                                    startWidthArray[i] *= 0.5;
                                }

                                if (startHeightArray[i] < blackHoleStartY)
                                {
                                    startHeightArray[i] *= 1.3;
                                }

                                else
                                {
                                    startHeightArray[i] *= 0.7;
                                }



                                if (endWidthArray[i] < blackHoleStartX)
                                {
                                    endWidthArray[i] *= 1.2;
                                }

                                else
                                {
                                    endWidthArray[i] *= 0.8;
                                }

                                if (endHeightArray[i] < blackHoleStartY)
                                {
                                    endHeightArray[i] *= 1.28;
                                }

                                else
                                {
                                    endHeightArray[i] -= 120;
                                }
                            }

                            if (blackHoleIterations < (blackHoleStartsPullingStars + 16))
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

                            else
                            {

                            }
                            
                        }

                            
                    
                    

                    if ((animationCounter % asteroidCounter === 0) && (blackHoleIterations < blackHoleStartsPullingStars))
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

                            whenToStartBlackHoleToggle = true;

                            blackHoleRadiusX *= blackHoleRadiusXMultiplier;
                            blackHoleRadiusY *= blackHoleRadiusYMultiplier;
                            //blackHoleStartAngle = Math.floor(Math.random() * 360) + 1;
                            //blackHoleEndAngle = Math.floor(Math.random() * 360) + 1;

                            blackHoleRotationRandom = (Math.floor(Math.random() * 100) + 1) / 100;

                            if (blackHoleIterations % 2 === 0) 
                            {
                                blackHoleRadiusAltX = 1.1;
                                blackHoleRadiusAltY = 1.1;
                            }

                            else
                            {
                                blackHoleRadiusAltX = 0.8;
                                blackHoleRadiusAltY = 0.8;
                            }

                            // Draw the ellipse
                            context.beginPath();
                            context.ellipse(blackHoleStartX, blackHoleStartY, blackHoleRadiusX * blackHoleRadiusAltX, blackHoleRadiusY * blackHoleRadiusAltY, blackHoleRotation * blackHoleRotationRandom, blackHoleStartAngle, blackHoleEndAngle);
                            context.fillStyle = blackHoleColor;
                            context.fill();
                            context.strokeStyle = "lightblue";
                            context.stroke();


                            blackHoleRotationRandom = (Math.floor(Math.random() * 100) + 1) / 100;

                            // Draws the 2nd ellipse
                            context.beginPath();
                            context.ellipse(blackHoleStartX, blackHoleStartY, (blackHoleRadiusX * blackHoleRadiusAltX) * 1.3, (blackHoleRadiusY * blackHoleRadiusAltY) * 0.8, -blackHoleRotation * blackHoleRotationRandom, blackHoleStartAngle, blackHoleEndAngle);
                            context.fillStyle = blackHoleColor;
                            context.fill();
                            context.strokeStyle = blackHoleColor;
                            context.stroke();


                            blackHoleRotationRandom = (Math.floor(Math.random() * 100) + 40) / 100;

                            // Draws the 3rd ellipse
                            context.beginPath();
                            context.ellipse(blackHoleStartX, blackHoleStartY, (blackHoleRadiusX * blackHoleRadiusAltX) * 0.4, (blackHoleRadiusY * blackHoleRadiusAltY) * 1.9, -0.5 * blackHoleRotation * blackHoleRotationRandom, blackHoleStartAngle, blackHoleEndAngle);
                            context.fillStyle = blackHoleColor;
                            context.fill();
                            context.strokeStyle = blackHoleColor;
                            context.stroke();            
            

                            if (blackHoleIterations > endGameTriggerBlackHoleIterations)
                            {  
                                debugger;
                                endGameFlash();
                                finaleTrigger = true;
                                animationCounter += 99999;
                            } 
                }                   
            }
        }
}


//let animationInterval2 = 1000;
//let interval2 = setInterval(endGameFlash, animationInterval2);
//let endGameFlashAnimationCounter = 0;
//let totalEndGameFlashAnimationCounter = 3;

canvas = document.getElementById("DemoCanvas");
context = canvas.getContext("2d");
ctx = canvas.getContext("2d");




function endGameFlash()
{
    /*
    if (endGameFlashAnimationCounter === totalEndGameFlashAnimationCounter + 1000)
    clearInterval(interval2);
    */
    
    //endGameFlashAnimationCounter++;
    //if (finaleTrigger)
    //{
        for (let j = 1; j <= 5; j++)
        {
            for (let i = 1; i <= 10; i++)
            {
                context.beginPath();
                context.moveTo(blackHoleStartX,blackHoleStartY);
                context.lineWidth = 10;
                context.lineTo(300 * i ,j * 250);
                context.strokeStyle = finaleColor;
                context.fillStyle = endLogoColor1;
                context.font = endLogoFont1;
                context.fillText(endLogoText1,endLogoStartWidth1,endLogoStartHeight1);

                context.fillStyle = endLogoColor2;
                context.font = endLogoFont2;
                context.fillText(endLogoText2,endLogoStartWidth2,endLogoStartHeight2);                         
                context.stroke();
                context.lineWidth = 1;
            }
        } 
    //}
}





