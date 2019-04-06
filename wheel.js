
    let winner = 0;   
    let arrayID = [];
    let arrayX = [];
    let arrayID2 = [];
    let arrayX2 = [];
    let arrayTime = [];

$ ( () =>
{

    let randomIterations = Math.floor(Math.random() * 35);
    randomIterations += 35;
    randomIterations = Math.floor(randomIterations);
    // $(".circle").css("transform","rotate(" + degrees + ")");

    let $canvas = $("<canvas    >");
    $canvas.css("width","10px");
    $canvas.css("height","60px");
    $canvas.css("background","red");
    $canvas.css("margin-left","49%");
    $canvas.css("margin-top","120px");
    $canvas.css("position","absolute");
    $canvas.css("z-index","0");
    let $circle = $(".circle");
    let animationInterval = 200;
    $("body").append($canvas);
    let animationCounter = 0;
    let totalAnimationIterations = randomIterations;
    let degrees = 0;
    let rotateString = 30;
 

    const interval = setInterval(draw, animationInterval);

    function draw()
    {
        animationCounter++;

        if (animationCounter > totalAnimationIterations)
        {
        clearInterval(interval);
        }

        if ((animationCounter <= (.25 * totalAnimationIterations)))
        {
        degrees += 40;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else if ((animationCounter <= (.5 * totalAnimationIterations)))
        {
        degrees += 30;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else if ((animationCounter <= (.6 * totalAnimationIterations)))
        {
        degrees += 15;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else if ((animationCounter <= (.7 * totalAnimationIterations)))
        {
        degrees += 8;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else if ((animationCounter <= (.85 * totalAnimationIterations)))
        {
        degrees += 4;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else if ((animationCounter <= (.90 * totalAnimationIterations)))
        {
        degrees += 3;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else if ((animationCounter <= (.95 * totalAnimationIterations)))
        {
        degrees += 2;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString);
        }

        else
        {
        degrees += 1;
        rotateString = `rotate(${degrees}deg)`;
        $circle.css("transform",rotateString); 
        }

        $(() =>
        {
            for (let i = 0; i <= 11; i++)
            {
                //taken directly from https://stackoverflow.com/questions/10445410/getting-the-x-and-y-coordinates-for-a-div-element
                let element = document.getElementById(String(i + 1));
                let position = element.getBoundingClientRect();
                let x = position.left;
                
                arrayID[i] = i + 1;
                arrayX[i] = x;
            }
    });
        //  let totalWindow = $(window).width();
        //  let halfWindow = $(window).width() / 2;   
        // $winner = $(`<h1>Winner: ${winner}</h1>`);
        // $("body").append($winner);
        // console.log("winner: " + winner);
        // console.log("full window: " + totalWindow);
        // console.log("half window: " + halfWindow);           
    }
});

    

    

        

    

    
    
