

//creates the "Ground" terrainvar canvas = document.getElementById("canvas");

var createGround = function() {


      //prepares the canvas to draw the lines
      var canvas = document.getElementById("DemoCanvas");
      if (canvas.getContext) 
      {
        var context = canvas.getContext("2d");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

      //how many ups and downs the terrain has, each x,y coordinate movement is a stop
      var numberStops = 1000;

        //loop goes until we hit the number of stops in numberStops
        for (var i = 0; i < numberStops; i++) 
        {

          //creates a random x-coordinate change and y-coordinate change to reach our new endpoint, in pixels
          var widthRandom = (Math.round(Math.random()*100));
          var heightRandom = (Math.round(Math.random()*100));


        
    
          //figures out which height to start at on the first iteration, between 300 and 700 px start-height
          if (i === 0) 
          {

          
           var sunRadiusMin = 40;
           var sunRadius = Math.max(sunRadiusMin,(Math.round(Math.random()*100)));
           
           var sunStartX = (Math.round(Math.random()*1500));
           var sunStartY = (Math.round(Math.random()*300));

           var moonRadiusMin = 20;
           var moonRadius = Math.max(moonRadiusMin,(Math.round(Math.random()*35)));
           var moonStartX = (Math.round(Math.random()*400));
           var moonStartY = (Math.round(Math.random()*80));
       
           context.beginPath();
           
           context.arc(sunStartX, sunStartY, sunRadius, 0, 2 * Math.PI);
           context.fillStyle = "yellow";
           context.fill();
           context.stroke();

            context.beginPath();
           
           context.arc(moonStartX, moonStartY, moonRadius, 0, 2 * Math.PI);
           context.fillStyle = "white";
           context.fill();
           context.stroke();


          //makes a bunch of Stars and displays them
          var numStars = 99999;
          var originalStarRadius = 2;
          var starRadius = originalStarRadius;
          var originalStarStartX = 10;
          var originalStarStartY = 10;
          var xRandomizer = 1;
          var starStartX = originalStarStartX;
          var starStartY = originalStarStartY;



          for (var j = 0; j<numStars; j++) {
          var xRandomizer = [Math.floor(Math.random() * 13) + 7]/10;
          var yRandomizer = [Math.floor(Math.random() * 13) + 7]/10;
          
           if ((j % 10 === 0) && (j != 0)) {
           starStartX = starStartX + 3;
           starRadius = Math.floor(Math.random() * 3) + 1;
           context.beginPath()
           context.arc(starStartX * xRandomizer, starStartY * yRandomizer, starRadius, 0, 2 * Math.PI);
           context.fillStyle = "white";   
           context.fill();
           context.stroke();
          
           starStartY = originalStarStartY; 
          }

          else {
           starRadius = Math.floor(Math.random() * 3) + 1;
           context.beginPath()
           context.arc(starStartX * xRandomizer, starStartY * yRandomizer, starRadius, 0, 2 * Math.PI);
           context.fillStyle = "white";
           context.fill();
           context.stroke();
           
           starStartY = starStartY + 30;

            }
          }
    

            var originalStartWidth = 0;
            var originalStartHeight = (Math.round(Math.random()*100))/2;

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

                else if (originalStartHeight >= 90 && originalStartHeight <=  100) {
                  originalStartHeight = 250;
                }

            //for this instance only, we start startWidth and startHeight to
            // the originalStartWidth and originalStartHeight
          	originalStartHeight = originalStartHeight + 10;
            var startWidth = originalStartWidth;
            var startHeight = originalStartHeight;


            //the end point of the new line will be the beginning point + the widthRandom and heightRandom changes in pixels;
            var endWidth = startWidth + widthRandom;
            var endHeight = startHeight + heightRandom;
          }


          else {

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

           context.beginPath();
           context.moveTo(startWidth,startHeight);
           context.lineTo(endWidth,endHeight);
           context.stroke();

       

          var priorEndWidth = endWidth;
          var priorEndHeight = endHeight; 

        }
      }
    };

    createGround();






