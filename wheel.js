

let arrayID = [];
let arrayX = [];
let arrayID2 = [];
let arrayX2 = [];
let arrayTime = [];
let lettersGuessed = [];
let correctLettersGuessed = [];
let spaceBoxCounter = 0;
let firstPlayerArray = [0];
let secondPlayerArray = [0];
let currentPlayer = "player1";
let otherPlayer = "player2";
let currentRound = 0;
let solvePuzzleString = "";


//https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

////https://wallpaperscraft.com/download/landscape_art_road_127350/5120x2880

//https://thewallpaper.co/digital-art-fall-scenery-painting-backgrounds-wallpapers-widescreen-images-artwork-for-windows-illustration-drawing-painting-art-is-everywhere-artist-creation-1504x1128/

//https://www.shutterstock.com/video/clip-29530201-cartoon-nature-landscape-animation-loop-colorful-hills

//https://visme.co/blog/simple-backgrounds/

//https://pngtree.com/illustration-design

//https://www.beyonddream.com/nature-beauty-landscape-oil-painting/i/0301

//https://www.indiamart.com/proddetail/landscape-canvas-painting-oil-painting-knife-painting-15086286597.html

//https://picclick.com/Beautiful-Vintage-Lake-Mountains-Landscape-Oil-Painting-152432073829.html

//https://www.google.com/search?rlz=1C5CHFA_enUS839US839&biw=1120&bih=611&tbm=isch&sa=1&ei=NPCtXNz_CKGD5wKd9I-QDg&q=beautiful+hand+painting+landscape+sky+free&oq=beautiful+hand+painting+landscape+sky+free&gs_l=img.3...26613.27296..27457...0.0..0.261.701.1j2j1......1....1..gws-wiz-img.IvuO7Fc5Ey8#imgrc=frzP-PQo6vyukM:

let url1 = "url('images/landscape1.jpg')";
let url2 = "url('images/landscape2.jpg')";
let url6 = "url('images/landscape6.jpg')";
let url7 = "url('images/landscape7.jpg')";

let backgroundImage = [url1,url2,url6,url7];
let eachRoundBackgroundColor = shuffle(backgroundImage);

let correctClip = ["#hitOrMiss","#thatsCorrect","#nibbHigh","#lightUpTheEyes","#brainBusters","#aintFirst","#itsEasy","#memberBerry","#youDaBest","#tfueBitCoin","#bailando","#wannaNegotiate","#youCanDoIt","#yupClip"];

let incorrectClip = ["#itsFrustrating","#byeFelicia","#noPoints","#wontGetFined","#burgundy","#strangeWilderness","#wario","#youChosePoorly","#nopeClip"];

let victoryClip = ["#iWonDaMoney","#johnnyDramaVictory"];

let nextRound = () =>
{
    currentRound++;

    $("#button5").prop("disabled",false);

    $("#topic").text("");

    $(".form").hide();

    $(".circle").hide();

    $("#triangleUp").hide();

    $("body").css("background",eachRoundBackgroundColor[currentRound]);
    $("body").css("background-size","cover");
    $("body").css("background-repeat","no-repeat no-repeat");

    $(".spaceBox").css("background",eachRoundBackgroundColor[currentRound]);
    $(".letterInputArea").css("background",eachRoundBackgroundColor[currentRound]);

    $(".board").remove();
    $(".letterInputArea").remove();
    $(".letterBox").remove();
    $(".spinWheel").remove();
    $(".solvePuzzle").remove();

    $currentBox = "";
    correctAnswer = "";
    $currentBoxText = "";
    correctGuess = false;
    arrayID = [];
    arrayID2 = [];
    arrayX = [];
    arrayX2 = [];
    correctGuessCounter = 0;
    correctLettersGuessed = [];
    currentAnswerArray = [];
    currentAnswerLength = 0;
    currentLetterValue = 200;
    currentQuestionArray = [];
    lettersGuessed = [];
    spaceBoxCounter = 0;
    solvePuzzleString = "";
}

let rotateWheel = () =>
{
    let randomIterations = Math.floor(Math.random() * 15);
    randomIterations += 15;
    randomIterations = Math.floor(randomIterations);

    let $circle = $(".circle");
    let animationInterval = 200;

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
    }

    let getX = () => 
    {

    }

    setTimeout(getX,250);

    getX();
};

let currentAnswerLength = 0;
let answerBox = "";
let currentQuestionArray = [];
let currentAnswerArray = [];
let correctGuessCounter = 0;
let prizeMoney = 0;
let currentLetterValue = 200;
let prizeMoneyPrior = 0;

let runTrivia = () =>
{
    $.ajax(
        {   
            url: "https://opentdb.com/api.php?amount=1",
            type: "GET",
            data2:
            {
            "$limit" : 1,
            "$$app_token" : "https://opentdb.com/api_token.php?command=request"
        }
        }).done(function(data2) 
        {
            if ((data2.results[0].correct_answer.length > 10) || (data2.results[0].type === "boolean")  || (data2.results[0].difficulty !== "easy"))
            {
                runTrivia();
                return;
            }

            for (let i = 0; i < (data2.results[0].correct_answer.length); i++)
            {
                if ((data2.results[0].correct_answer[i] === ".") || (data2.results[0].correct_answer[i] === "'") || (data2.results[0].correct_answer[i] === ";") || (data2.results[0].correct_answer[i] === ":")|| (data2.results[0].correct_answer[i] === "!")|| (data2.results[0].correct_answer[i] === "1")|| (data2.results[0].correct_answer[i] === "2")|| (data2.results[0].correct_answer[i] === "3")|| (data2.results[0].correct_answer[i] === "4")|| (data2.results[0].correct_answer[i] === "5")|| (data2.results[0].correct_answer[i] === "6")|| (data2.results[0].correct_answer[i] === "7")|| (data2.results[0].correct_answer[i] === "8")|| (data2.results[0].correct_answer[i] === "9")|| (data2.results[0].correct_answer[i] === "0")  || (data2.results[0].correct_answer[i] === "-")  || (data2.results[0].correct_answer[i] === ",")  || (data2.results[0].correct_answer[i] === "?")  || (data2.results[0].correct_answer[i] === "@")  || (data2.results[0].correct_answer[i] === "#")  || (data2.results[0].correct_answer[i] === "$")  || (data2.results[0].correct_answer[i] === "%")  || (data2.results[0].correct_answer[i] === "^")  || (data2.results[0].correct_answer[i] === "&")  || (data2.results[0].correct_answer[i] === "*")  || (data2.results[0].correct_answer[i] === "(")  || (data2.results[0].correct_answer[i] === ")")  || (data2.results[0].correct_answer[i] === "_")  || (data2.results[0].correct_answer[i] === "+")  || (data2.results[0].correct_answer[i] === "="))
                {
                    runTrivia();
                    return;
                }
                else
                {
                
                }
            }

            for (let i = 0; i < (data2.results[0].question.length); i++)
            {
                if ((data2.results[0].question[i] === ":") || (data2.results[0].question[i] === "-") || (data2.results[0].question[i] === "@")  || (data2.results[0].question[i] === "#")  || (data2.results[0].question[i] === "$")  || (data2.results[0].question[i] === "%")  || (data2.results[0].question[i] === "^")  || (data2.results[0].question[i] === "&")  || (data2.results[0].question[i] === "*")  || (data2.results[0].question[i] === "(")  || (data2.results[0].question[i] === ")")  || (data2.results[0].question[i] === "_")  || (data2.results[0].question[i] === "+")  || (data2.results[0].question[i] === "="))
                {
                    runTrivia();
                    return;
                }
                else
                {
                
                }
            }

            for (let i = 0; i < data2.results.length; i++)
            {          
                currentQuestionArray[0] = data2.results[i].question;
                currentAnswerArray[0] = data2.results[i].correct_answer;
            }
            currentAnswerLength = currentAnswerArray[0].length;
            $(".circle").show();
            updateBoard();
        });       
}

let updateBoard = () =>
{
    let $board = $("<div>").attr("class","board");
    $("#boardRow").append($board);

    $("#triangleUp").show();

    let $topic = $("<div>").attr("id","topic");
    $topic.text(currentQuestionArray[0]);
    $("#topic").append($topic);
    
    for (let i = 0; i < currentAnswerLength; i++)
    {
        if ((currentAnswerArray[0][i]) === " ")
        {
            $spaceBox = $("<div>").attr("class","spaceBox")
            $spaceBox.css("color","lightblue");
            $spaceBox.text(currentAnswerArray[0][i].toUpperCase());
            $($board).append($spaceBox);
            spaceBoxCounter++;   
        }
        else
        {
            let currentAnswerLetter = (currentAnswerArray[0][i])
            $answerBox = $("<div>").attr("class","answerBox");
            $answerBox.addClass(currentAnswerLetter);
            $answerBox.text(currentAnswerArray[0][i].toUpperCase());
            $answerBox.css("color","pink");
            $($board).append($answerBox);
        }
    }
    createLetterButtons();

    $(".letterBox").on("click", (event) =>
    {      
        let $currentBox = $(event.currentTarget);
        let $currentBoxText = $currentBox.text();
        $currentBox.prop("disabled",true);
        $currentBox.addClass("alreadyGuessed");
         
        $(".letterBox").prop("disabled",true);
        lettersGuessed.push($currentBoxText);

        //we set the correctGuess to false, until the user clicks a letter that is in the answer
        let correctGuess = false;
        let correctGuessesThisTurn = 0;
    
        //after the user clicks a letter, we loop through the number of characters in the answer to see if any of them are the letter of the clicked button
        for (let i = 0; i < currentAnswerLength; i++)
        {
            if (currentAnswerArray[0][i].toUpperCase() === $currentBoxText)
            {
                //if the answer includes the letter that was clicked, make the box show up green and change the correctGuess to true
        
                let targetAnswerBox = currentAnswerArray[0][i];
                let $targetAnswerBox = $(`.${targetAnswerBox}`)
                $targetAnswerBox.css("background","green");     
                correctGuess = true;
                correctGuessCounter++;
                correctGuessesThisTurn++;
            }
        }
        if (correctGuess)
        {
            correctLettersGuessed.push($currentBoxText);
            $currentBox.css("opacity",0.5);
            $currentBox.css("background","lightgreen");

            if (($currentBoxText === "A") ||($currentBoxText === "E") ||($currentBoxText === "I") ||($currentBoxText === "O") ||($currentBoxText === "U") ||($currentBoxText === "Y"))
            {
                currentLetterValue = 0;
            }
            else
            {
                currentLetterValue = 200;
            }

            prizeMoney += (currentLetterValue * correctGuessesThisTurn);

            if ((correctGuessCounter + spaceBoxCounter) !== currentAnswerLength)
            {
                let randomCorrectClipLength = correctClip.length;
                let randomCorrectClipIndex = Math.floor(Math.random() * (randomCorrectClipLength));
                    
                $(`audio${correctClip[randomCorrectClipIndex]}`)[0].play()
            }

            if (currentPlayer === "player1")
            {
                firstPlayerArray[0] += prizeMoney;

                $("#spinWheel1").prop("disabled",false);
                $("#solvePuzzle1").prop("disabled",false); 
                $("#spinWheel1").css("background","lightgreen");
                $("#solvePuzzle1").css("background","lightgreen"); 

                $("#spinWheel2").prop("disabled",true);
                $("#solvePuzzle2").prop("disabled",true);
                $("#spinWheel2").css("background","pink");
                $("#solvePuzzle2").css("background","pink");  
            
                $(".firstPlayer").text(`Player 1 - $${firstPlayerArray[0]}`);
                
                let $modal = $(".modal");
                $modal.text(`CORRECT: +$${prizeMoney}`);
                $modal.css("color","green");

                $modal.show(1).delay(1000).hide(1);
            }
            else
            {
                secondPlayerArray[0] += prizeMoney;

                $("#spinWheel2").prop("disabled",false);
                $("#solvePuzzle2").prop("disabled",false);
                $("#spinWheel2").css("background","lightgreen");
                $("#solvePuzzle2").css("background","lightgreen"); 

                $("#spinWheel1").prop("disabled",true);
                $("#solvePuzzle1").prop("disabled",true);
                $("#spinWheel1").css("background","pink");
                $("#solvePuzzle1").css("background","pink");     

                $(".secondPlayer").text(`Player 2 - $${secondPlayerArray[0]}`);

                let $modal = $(".modal");
                $modal.text(`CORRECT: +$${prizeMoney}`);
                $modal.css("color","green");

                $modal.show(1).delay(1000).hide(1);
            }
            prizeMoney = 0;
        }
        else
        {
            prizeMoney += (currentLetterValue * correctGuessesThisTurn);
            $currentBox.css("opacity",0.7);
            $currentBox.css("background","white");

            let randomIncorrectClipLength = incorrectClip.length;
            let randomIncorrectClipIndex = Math.floor(Math.random() * (randomIncorrectClipLength));

            $(`audio${incorrectClip[randomIncorrectClipIndex]}`)[0].play()

            if (currentPlayer === "player1")
            {
                currentPlayer = "player2";
                otherPlayer = "player1";

                $("#spinWheel2").prop("disabled",false);
                $("#solvePuzzle2").prop("disabled",false);
                $("#spinWheel2").css("background","lightgreen");
                $("#solvePuzzle2").css("background","lightgreen"); 

                $("#spinWheel1").prop("disabled",true);
                $("#solvePuzzle1").prop("disabled",true);
                $("#spinWheel1").css("background","pink");
                $("#solvePuzzle1").css("background","pink"); 
                
                $(".secondPlayer").css("background","lightgreen");
                $(".firstPlayer").css("background","pink");

                let $prizePopUp = $("<div>").attr("class","prizePopUp")

                let $modal = $(".modal");
                $modal.text(`WRONG: +$${prizeMoney}`);
                $modal.css("color","red");

                $modal.show(1).delay(1000).hide(1);
            }
            else
            {
                currentPlayer = "player1";
                otherPlayer = "player2"; 

                $("#spinWheel1").prop("disabled",false);
                $("#solvePuzzle1").prop("disabled",false);
                $("#spinWheel1").css("background","lightgreen");
                $("#solvePuzzle1").css("background","lightgreen");  
                
                $("#spinWheel2").prop("disabled",true);
                $("#solvePuzzle2").prop("disabled",true);
                $("#spinWheel2").css("background","pink");
                $("#solvePuzzle2").css("background","pink"); 

                $(".firstPlayer").css("background","lightgreen");
                $(".secondPlayer").css("background","pink");

                let $modal = $(".modal");
                $modal.text(`WRONG: +$${prizeMoney}`);
                $modal.css("color","red");

                $modal.show(1).delay(1000).hide(1);
            }
        }
        
        if ((correctGuessCounter + spaceBoxCounter) === currentAnswerLength)
        {

            let randomVictoryClipLength = victoryClip.length;
            let randomVictoryClipIndex = Math.floor(Math.random() * (randomVictoryClipLength));
            $(`audio${victoryClip[randomVictoryClipIndex]}`)[0].play()
            
            let $modal = $(".modal");
                $modal.text(`You Solved It! + $500`);
                $modal.css("color","green");

                $modal.show(1).delay(1000).hide(1);

            if (currentPlayer === "player1")
            {
                firstPlayerArray[0] += 500;
                $(".firstPlayer").text(`Player 1 - $${firstPlayerArray[0]}`);
                
            }
            else
            {
                secondPlayerArray[0] += 500;
                $(".secondPlayer").text(`Player 2 - $${secondPlayerArray[0]}`);
            } 
            nextRound();
        }
    });

}
         
//Step 1 - click button to runTrivia
$( () =>
{ 
    $("body").css("background",eachRoundBackgroundColor[currentRound]);
    $("body").css("background-size","cover");
    $("body").css("background-repeat","no-repeat no-repeat");
    $("#button5").on("click", (event) =>
    {          
            $("#button5").prop("disabled",true);
            runTrivia();    
    });
});

let createLetterButtons = () =>
{
    let $letterInputArea = $("<div class = 'letterInputArea'></div>");

    let $letterA = $("<button id = 'letterA' class = 'letterBox'>A</button>");
    let $letterB = $("<button id = 'letterB' class = 'letterBox'>B</button>");
    let $letterC = $("<button id = 'letterC' class = 'letterBox'>C</button>");
    let $letterD = $("<button id = 'letterD' class = 'letterBox'>D</button>");
    let $letterE = $("<button id = 'letterE' class = 'letterBox'>E</button>");
    let $letterF = $("<button id = 'letterF' class = 'letterBox'>F</button>");
    let $letterG = $("<button id = 'letterG' class = 'letterBox'>G</button>");
    let $letterH = $("<button id = 'letterH' class = 'letterBox'>H</button>");
    let $letterI = $("<button id = 'letterI' class = 'letterBox'>I</button>");
    let $letterJ = $("<button id = 'letterJ' class = 'letterBox'>J</button>");
    let $letterK = $("<button id = 'letterK' class = 'letterBox'>K</button>");
    let $letterL = $("<button id = 'letterL' class = 'letterBox'>L</button>");
    let $letterM = $("<button id = 'letterM' class = 'letterBox'>M</button>");
    let $letterN = $("<button id = 'letterN' class = 'letterBox'>N</button>");
    let $letterO = $("<button id = 'letterO' class = 'letterBox'>O</button>");
    let $letterP = $("<button id = 'letterP' class = 'letterBox'>P</button>");
    let $letterQ = $("<button id = 'letterQ' class = 'letterBox'>Q</button>");
    let $letterR = $("<button id = 'letterR' class = 'letterBox'>R</button>");
    let $letterS = $("<button id = 'letterS' class = 'letterBox'>S</button>");
    let $letterT = $("<button id = 'letterT' class = 'letterBox'>T</button>");
    let $letterU = $("<button id = 'letterU' class = 'letterBox'>U</button>");
    let $letterV = $("<button id = 'letterV' class = 'letterBox'>V</button>");
    let $letterW = $("<button id = 'letterW' class = 'letterBox'>W</button>");
    let $letterX = $("<button id = 'letterX' class = 'letterBox'>X</button>");
    let $letterY = $("<button id = 'letterY' class = 'letterBox'>Y</button>");
    let $letterZ = $("<button id = 'letterZ' class = 'letterBox'>Z</button>");

    let $spinWheel = $("<button class = 'spinWheel' id = 'spinWheel1'>Spin Wheel</button>");
    let $solvePuzzle = $("<button class = 'solvePuzzle' id = 'solvePuzzle1'>Solve Puzzle - Not Finished Yet</button>");

    let $spinWheel2 = $("<button class = 'spinWheel' id = 'spinWheel2'>Spin Wheel</button>");
    let $solvePuzzle2 = $("<button class = 'solvePuzzle' id = 'solvePuzzle2'>Solve Puzzle - Not Finished Yet</button>");

    

    $($letterInputArea).append($letterA);
    $($letterInputArea).append($letterB);
    $($letterInputArea).append($letterC);
    $($letterInputArea).append($letterD);
    $($letterInputArea).append($letterE);
    $($letterInputArea).append($letterF);
    $($letterInputArea).append($letterG);
    $($letterInputArea).append($letterH);
    $($letterInputArea).append($letterI);
    $($letterInputArea).append($letterJ);
    $($letterInputArea).append($letterK);
    $($letterInputArea).append($letterL);
    $($letterInputArea).append($letterM);
    $($letterInputArea).append($letterN);
    $($letterInputArea).append($letterO);
    $($letterInputArea).append($letterP);
    $($letterInputArea).append($letterQ);
    $($letterInputArea).append($letterR);
    $($letterInputArea).append($letterS);
    $($letterInputArea).append($letterT);
    $($letterInputArea).append($letterU);
    $($letterInputArea).append($letterV);
    $($letterInputArea).append($letterW);
    $($letterInputArea).append($letterX);
    $($letterInputArea).append($letterY);
    $($letterInputArea).append($letterZ);

    $("#firstPlayerSpinArea").append($spinWheel); 
    $("#firstPlayerSpinArea").append($solvePuzzle);

    $("#secondPlayerSpinArea").append($spinWheel2); 
    $("#secondPlayerSpinArea").append($solvePuzzle2);

    $("#letterInputAreaRow").append($letterInputArea);

    $(".letterBox").prop("disabled",true);

    if (currentPlayer === "player1")
    {
        $("#spinWheel1").prop("disabled",false);
        $("#solvePuzzle1").prop("disabled",false);
        $("#spinWheel1").css("background","lightgreen");
        $("#solvePuzzle1").css("background","lightgreen"); 

        $("#spinWheel2").prop("disabled",true);
        $("#solvePuzzle2").prop("disabled",true);
        $("#spinWheel2").css("background","pink");
        $("#solvePuzzle2").css("background","pink"); 
    }
    else
    {
        $("#spinWheel2").prop("disabled",false);
        $("#solvePuzzle2").prop("disabled",false);
        $("#spinWheel2").css("background","lightgreen");
        $("#solvePuzzle2").css("background","lightgreen"); 

        $("#spinWheel1").prop("disabled",true);
        $("#solvePuzzle1").prop("disabled",true);
        $("#spinWheel1").css("background","pink");
        $("#solvePuzzle1").css("background","pink");
    }

    

    $(".spinWheel").on("click", (event) =>
    { 
        $(".letterBox").prop("disabled",false);
        $(".spinWheel").prop("disabled",true);
        $(".solvePuzzle").prop("disabled",true);
        
        rotateWheel();
    });

    $(".solvePuzzle").on("click", (event) =>
    { 
        solvePuzzleString = "";
        $(".form").show();

        for (let i = 0; i < currentAnswerLength; i++)
        {
            let correctCounter = false;

            for (let j = 0; j < correctLettersGuessed.length; j++)
            {
                if (currentAnswerArray[0][i].toUpperCase() === correctLettersGuessed[j])
                {
                solvePuzzleString += correctLettersGuessed[j];
                correctCounter = true;  
                }

                else if (currentAnswerArray[0][i] === " ")
                {
                solvePuzzleString += " ";
                }

                else if (((j + 1) === correctLettersGuessed.length) && (correctCounter === false))
                {
                    solvePuzzleString += "-";
                }    
                
                else
                {

                }
            }
        }
        
        let $form = $(".form");
        $($form).appendTo("#firstPlayerSpinArea");
        $form.attr("placeholder",solvePuzzleString);

        debugger;
        let correctAnswer = currentAnswerArray[0].toUpperCase();

        $(".form").submit(function(event)
        {
            debugger;
            event.preventDefault();
            let inputText = $("#inputText");
            if (correctAnswer === inputText.val())
            {
                alert("you got it right!");

                if (currentPlayer === "player1")
                {
                    firstPlayerArray[0] += 500;
                    $(".firstPlayer").text(`Player 1 - $${firstPlayerArray[0]}`);
                    
                }
                else
                {
                    secondPlayerArray[0] += 500;
                    $(".secondPlayer").text(`Player 2 - $${secondPlayerArray[0]}`);
                }

            nextRound();
            
            }

            else
            {  
                alert("you got it wrong");

                if (currentPlayer === "player1")
                {
                    currentPlayer = "player2";
                    otherPlayer = "player1";
                    
                }
                else
                {
                    currentPlayer = "player1";
                    otherPlayer = "player2";
                }
                $(".form").hide();
                return;
            } 
        })   
    })
}