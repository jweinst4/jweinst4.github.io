  

//creates the "Ground" terrain 
var createGround = function() {


      //prepares the canvas to draw the lines
      var canvas = document.getElementById("DemoCanvas");
      if (canvas.getContext) 
      {
        var context = canvas.getContext("2d");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        var backgroundColor = ctx.fillStyle;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      //end of preparing the canvas
      
       
        //variable declarations
        //numberStops is many ups and downs, or stops, the ground has
        var numberStops = 50;
        var originalStartWidth = 0;
        var originalStartHeight = (Math.round(Math.random()*100))/2;


        //loop goes until we hit the number of stops in numberStops
        for (var i = 0; i < numberStops; i++) 
        {
            //creates a random change in the width,
            //and a random change in the height,
            //for our new line to the next ground spot
            var widthRandom = (Math.round(Math.random()*100));
            var heightRandom = (Math.round(Math.random()*100));

              
              if (i === 0) 
              {
                //figures out which height to start at on the first iteration, between 300 and 700 px start-height
                if (originalStartHeight >= 0 && originalStartHeight <= 10) {
                    originalStartHeight = 500;
                }

                      else if (originalStartHeight >= 10 && originalStartHeight <= 20) {
                        originalStartHeight = 525;
                      }

                else if (originalStartHeight >= 20 && originalStartHeight <= 30) {
                  originalStartHeight = 550;
                }

                      else if (originalStartHeight >= 30 && originalStartHeight <= 40) {
                        originalStartHeight = 575;
                      }

                else if (originalStartHeight >= 40 && originalStartHeight <= 50) {
                  originalStartHeight = 600;
                }

                      else if (originalStartHeight >= 50 && originalStartHeight <= 60) {
                        originalStartHeight = 300;
                      }

                else if (originalStartHeight >= 60 && originalStartHeight <= 70) {
                  originalStartHeight = 350;
                }

                      else if (originalStartHeight >= 70 && originalStartHeight <= 80) {
                        originalStartHeight = 400;
                      }

                else if (originalStartHeight >= 80 && originalStartHeight <= 90) {
                  originalStartHeight = 450;
                }

                      else {
                        originalStartHeight = 250;
                      }
                //end of finding out the height for the ground to start at
                      
                //maxGroundHeight will be figured out as we make the ground
                //it will be the min y value of the ground, so we dont
                //put stars on the ground
                var maxGroundHeight = originalStartHeight;
                var startWidth = originalStartWidth;
                var startHeight = originalStartHeight;
                var canvasWidth = 1920;
                var canvasHeight = 1080;
                var planetStrokeColor = backgroundColor;

                      var groundThickness = 5;
                      var groundColor = "yellow";
                      var defaultGroundColor = "black";
                
                var planetConnectionThickness = 3;
                var defaultConnectionColor = "white";
          
                
                      //planets cant be above y-axis value of the minPlanetStartY
                      var minPlanetStartY = 50;

                //all variables related to the "sun"
                var sunRadiusMin = 70;
                var sunRadius = Math.max(sunRadiusMin,(Math.round(Math.random()*100)));
                var sunStartX = (Math.round(Math.random()*1500));
                var sunStartY = Math.max((Math.round(Math.random()*350)),minPlanetStartY);
                var sunConnectionColor = "white";
                var sunColor = "yellow";

                      //all variables related to the "moon"
                      var moonRadiusMin = 20;
                      var moonRadius = Math.max(moonRadiusMin,(Math.round(Math.random()*35)));
                      var moonStartX = (Math.round(Math.random()*1500));
                      var moonStartY = Math.max((Math.round(Math.random()*350),minPlanetStartY));
                      var moonConnectionColor = "white";
                      var moonColor = "pink";

                //all variables related to "planet1"
                var planet1RadiusMin = 26;
                var planet1Radius = Math.max(moonRadiusMin,(Math.round(Math.random()*35)));
                var planet1StartX = (Math.round(Math.random()*1500));
                var planet1StartY = Math.max((Math.round(Math.random()*350)),minPlanetStartY);
                var otherConnectionColor = "white";
                var planet1Color = "red";

                      //all variables related to "planet2"
                      var planet2RadiusMin = 17;
                      var planet2Radius = Math.max(moonRadiusMin,(Math.round(Math.random()*35)));
                      var planet2StartX = (Math.round(Math.random()*1500));
                      var planet2StartY = Math.max((Math.round(Math.random()*350)),minPlanetStartY);
                      var planet2Color = "grey";

                //our new endpoint for the ground is the previous endpoint plus
                //a random width increase or a random height increase/decrease
                var endWidth = startWidth + widthRandom;
                var endHeight = startHeight + heightRandom;

                      //variables for the ellipse
                      var ellipseStartXMin = 0;
                      var ellipseStartYMin = 0;
                      var ellipseStartAngleScalar = -2;
                      var ellipseStartAngle = [Math.PI / 4] * ellipseStartAngleScalar;
                      var ellipseEndAngleScalar = 0.75;
                      var ellipseEndAngle = [Math.PI * 2] * ellipseEndAngleScalar;
                      var rotationScalar = 4;
                      var rotation = [Math.PI / 4] * rotationScalar;
                      var ellipseThickness = 1  ;


                          var secondEllipseStartAngleScalar = -2;
                          var secondEllipseStartAngle = [Math.PI / 4] * ellipseStartAngleScalar;
                          var secondEllipseEndAngleScalar = 0.5;
                          var secondEllipseEndAngle = [Math.PI * 2] * ellipseEndAngleScalar;

                      var ellipseStartX = sunStartX;
                      var ellipseStartY = sunStartY;
                      var ellipseRadiusX = 250;
                      var ellipseRadiusY = 25;
                      var sunRadiusMax = 20 * ellipseRadiusX;
                      var sunRadius = Math.min(sunRadiusMax,sunRadius);

                var starFillColor = "yellow";
                var otherStarFillColor = "white";
                var starStartY = originalStarStartY; 
                var numStars = 9999;
                var starMinRadius = 1;
                var starMaxRadius = 3;
                var originalStarRadius = 2;
                var starRadius = originalStarRadius;
                var originalStarStartX = 10;
                var originalStarStartY = 5;
                var xRandomizer = 1;
                var yRandomizer = 1;
                var starStartX = originalStarStartX;
                var starStartY = originalStarStartY;
                var whenToIncreaseX = 10;
               
                  //lower value means more dense stars
                  var xStarDensity = 3;
                  var yStarDensity = 3;


  

                //draws line connecting the planets
                //draws line connecting the sun to the moon
                context.beginPath();
                context.moveTo(sunStartX,sunStartY);
                context.lineWidth = planetConnectionThickness;
                context.lineTo(moonStartX,moonStartY );
                context.strokeStyle = sunConnectionColor;
                context.stroke();
                context.lineWidth = 1;
                context.strokeStyle = defaultConnectionColor;

                      //draws line connecting the sun to planet1
                      context.beginPath();
                      context.moveTo(sunStartX,sunStartY);
                      context.lineWidth = planetConnectionThickness;
                      context.lineTo(planet1StartX,planet1StartY);
                      context.strokeStyle = sunConnectionColor;
                      context.stroke();
                      context.lineWidth = 1;
                      context.strokeStyle = defaultConnectionColor;

                //draws line connecting the sun to planet2
                context.beginPath();
                context.moveTo(sunStartX,sunStartY);
                context.lineWidth = planetConnectionThickness;
                context.lineTo(planet2StartX,planet2StartY);
                context.strokeStyle = sunConnectionColor;
                context.stroke();
                context.lineWidth = 1;
                context.strokeStyle = defaultConnectionColor;

                      //draws line connecting the moon  to planet1
                      context.beginPath();
                      context.moveTo(moonStartX,moonStartY);
                      context.lineWidth = planetConnectionThickness;
                      context.lineTo(planet1StartX,planet1StartY);
                      context.strokeStyle = moonConnectionColor;
                      context.stroke();
                      context.lineWidth = 1;
                      context.strokeStyle = defaultConnectionColor;


                //draws line connecting the moon to planet2
                context.beginPath();
                context.moveTo(moonStartX,moonStartY);
                context.lineWidth = planetConnectionThickness;
                context.lineTo(planet2StartX,planet2StartY);
                context.strokeStyle = moonConnectionColor;
                context.stroke();
                context.lineWidth = 1;
                context.strokeStyle = defaultConnectionColor;

                      //draws line connecting planet1 to planet2
                      context.beginPath();
                      context.moveTo(planet1StartX,planet1StartY);
                      context.lineWidth = planetConnectionThickness;
                      context.lineTo(planet2StartX,planet2StartY);
                      context.strokeStyle = otherConnectionColor;
                      context.stroke();
                      context.lineWidth = 1;
                      context.strokeStyle = defaultConnectionColor;

                             // draws the ellipse
                             context.beginPath();
                             context.lineWidth = ellipseThickness;
                             context.ellipse(ellipseStartX, ellipseStartY, ellipseRadiusX, ellipseRadiusY, rotation, 0, Math.PI / 2);
                             context.stroke();
                             context.lineWidth = 1;

               //draws the sun
               context.beginPath();
               context.arc(sunStartX, sunStartY, sunRadius, 0, 2 * Math.PI);
               context.fillStyle = sunColor;
               context.fill();
               context.strokeStyle = sunColor;
               context.stroke();
               context.lineWidth = 1;

               // draws the ellipse
                             context.beginPath();
                             context.lineWidth = ellipseThickness;
                             context.ellipse(ellipseStartX, ellipseStartY, ellipseRadiusX, ellipseRadiusY, rotation, Math.PI / 2, Math.PI);
                             context.stroke();
                             context.lineWidth = 1;
                            


       
                           

             
                             

          

                     //draws the moon
                     context.beginPath();
                     context.arc(moonStartX, moonStartY, moonRadius, 0, 2 * Math.PI);
                     context.fillStyle = moonColor;
                     context.strokeStyle = moonColor;
                     context.fill();
                     context.stroke();

               //draws planet1
               context.beginPath();
               context.arc(planet1StartX, planet1StartY, planet1Radius, 0, 2 * Math.PI);
               context.fillStyle = planet1Color;
               context.fill();
               context.strokeStyle = planet1Color;
               context.stroke();

                     //draws planet2
                     context.beginPath();
                     context.arc(planet2StartX, planet2StartY, planet2Radius, 0, 2 * Math.PI);
                     context.fillStyle = planet2Color;
                     context.fill();
                     context.strokeStyle = planet2Color;
                     context.stroke();

        

                              }
              else 
              {
                //the starting coordinates of the new line are the endpoints from the prior iteration
                var startWidth = priorEndWidth;
                var startHeight = priorEndHeight;

                //the endWidth is just the startWidth plus the new x change in pixels;
                var endWidth = startWidth + widthRandom;

                //once in every 2 iterations, we want the height to go down rather than up
                //this is to keep the ground terrain on the page, and not just increasing
                //in height like a mountain would
                if (i % 2 === 0) 
                  {
                   var endHeight = startHeight - heightRandom;
                  }
                  else 
                  {
                   var endHeight = startHeight + heightRandom;
                  }
              }
                
                  //if the endHeight is going to be smaller than the current maxGroundHeight
                  //then the new maxGroundHeight is changed.  This is important later when
                  //we make our stars so we dont put stars onto the ground, only into the sky
                  if (endHeight < maxGroundHeight) 
                  {
                   maxGroundHeight = endHeight;
                  }

                  else 
                  {
                  
                  }   
                   
                   //draws the new line on the ground
                   context.beginPath();
                   context.moveTo(startWidth,startHeight);
                   context.lineWidth = groundThickness;
                   context.lineTo(endWidth,endHeight);
                   context.strokeStyle = groundColor;
                   context.stroke();
                   context.lineWidth = 1;
                   context.strokeStyle = defaultGroundColor;

                  var priorEndWidth = endWidth;
                  var priorEndHeight = endHeight;

                  //checks to make sure our drawing is still within the canvaas
                  if (endWidth > canvasWidth) {
                 
                    break;
                  }


             }
             
                //makes a bunch of Stars and displays them



                
                //for loops keeps making stars until we create stars in
                //the amount of numStars
                for (var j = 0; j < numStars; j++)
                  {
                        //makes a random number for the x and y coordinates.  This
                        //scalar tells us how much to the left or right of the
                        //line the new star is
                        var xRandomizer = [Math.floor(Math.random() * 13) + 7]/10;
                        var yRandomizer = [Math.floor(Math.random() * 13) + 7]/10;
                      
                 
                 //were iterating to see when we should move the x-coordinate of the
                 //new stars over by xStarDensity (i.e. if we were at x =10 for
                 //our stars, then the new x-coordinate may be the current x-coord
                 // + xStar Density = x + 3 or x+5 or whatever
                 if ((j % whenToIncreaseX === 0) && (j != 0)) 

                 {

                   if ((starStartY * yRandomizer) > maxGroundHeight)
                            {
                               starStartY = originalStarStartY;
                            }

                            else {
                              starStartY = starStartY + yStarDensity;
                            }

                   starStartX = starStartX + xStarDensity;
                   starRadius = Math.floor(Math.random() * starMaxRadius) + starMinRadius;
                   context.beginPath()
                   context.arc(starStartX * xRandomizer, starStartY * yRandomizer, starRadius, 0, 2 * Math.PI);
                   context.fillStyle = otherStarFillColor;   
                   context.fill();
                   context.stroke();
                 
                          //checks if the new y endpoint is greater than the ground height,
                          //i.e. we dont want to place stars on the ground.  If it is greater,
                          //then we go back to the original y-coordinate of the first placed
                          //star
                         
                  }


                  else
                  {

                       if ((starStartY * yRandomizer) > maxGroundHeight) 
                           {
                             starStartY = originalStarStartY;
                           }
                           else
                           {
                              starStartY = starStartY + yStarDensity;
                           }
                     starRadius = Math.floor(Math.random() * starMaxRadius) + starMinRadius;
                     context.beginPath()
                     context.arc(starStartX * xRandomizer, starStartY * yRandomizer, starRadius, 0, 2 * Math.PI);
                     context.fillStyle = starFillColor;
                     context.fill();
                     context.stroke();
                       
                  }

               }
             }
           }

createGround();

