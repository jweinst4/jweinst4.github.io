
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
let eachRoundBackgroundColor = ["lightblue","lightyellow","brown","orange","silver","gold","aqua"];
let solvePuzzleString = "";

let correctClip = ["#hitOrMiss","#thatsCorrect","#scubaSquad","#sneaky","#nibbHigh","#heyListen","#lightUpTheEyes","#brainBusters","#aintFirst","#itsEasy","#memberBerry","#youDaBest","#tfueBitCoin"];

let incorrectClip = ["#itsFrustrating","#imSorryDave","#byeFelicia","#noPoints","#wontGetFined","#burgundy","#strangeWilderness","#spareSomeCutter","#purgeSiren","#bloodSportScream","#soSayWeAll","#wario"];

let victoryClip = ["#iWonDaMoney","#johnnyDramaVictory","#iWin"];

let nextRound = () =>
{
    currentRound++;
    $("body").css("background",eachRoundBackgroundColor[currentRound]);
    $("#firstPlayerPrizePopUpArea").css("background",eachRoundBackgroundColor[currentRound]);
    $("#secondPlayerPrizePopUpArea").css("background",eachRoundBackgroundColor[currentRound]);
    $("#firstPlayerSpinArea").css("background",eachRoundBackgroundColor[currentRound]);
    $("#secondPlayerSpinArea").css("background",eachRoundBackgroundColor[currentRound]);
    $(".spaceBox").css("background",eachRoundBackgroundColor[currentRound]);
    $(".letterInputArea").css("background",eachRoundBackgroundColor[currentRound]);
    $currentBox = "";
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
    $(".board").remove();
    $(".letterInputArea").remove();
    $(".letterBox").remove();
    $(".spinWheel").remove();
    $(".solvePuzzle").remove();

    spaceBoxCounter = 0;
    solvePuzzleString = "";
    
}

let rotateWheel = () =>
{
    //$(".letterBox").prop("disabled",false);

    for (let i = 0; i < lettersGuessed.length; i++)
    {
        let currentBoxToDeactivate = "#letter" + lettersGuessed[i];
        //$(currentBoxToDeactivate).prop("disabled",true);
    }
    
    let randomIterations = Math.floor(Math.random() * 15);
    randomIterations += 15;
    randomIterations = Math.floor(randomIterations);
    // $(".circle").css("transform","rotate(" + degrees + ")");

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

        // let getXCoordinate = () =>
        // {
        //     for (let i = 0; i <= 11; i++)
        //     {
        //         //taken directly from https://stackoverflow.com/questions/10445410/getting-the-x-and-y-coordinates-for-a-div-element
        //         let element = document.getElementById(String(i + 1));
        //         let position = element.getBoundingClientRect();
        //         let x = position.left;
        //         let y = position.top;
        //     } 
        // }
        // // setTimeout(getXCoordinate,3000)
        //  getXCoordinate();
        //  let elem = document.elementFromPoint(600,500);
        //  console.log(elem);
        // console.log(arrayID);
        // console.log(arrayX);     
    }
};

let currentAnswerLength = 0;
let answerBox = "";
let currentQuestionArray = [];
let currentAnswerArray = [];
let correctGuessCounter = 0;
let prizeMoney = 0;
let currentLetterValue = 200;
let prizeMoneyPrior = 0;

//  STEP 2
let runTrivia = () =>
{
    //connects to the trivia API and returns an array called data2
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
            if ((data2.results[0].correct_answer.length > 20) || (data2.results[0].type === "boolean"))
            {
                runTrivia();
                return;
            }

            for (let i = 0; i < (data2.results[0].correct_answer.length); i++)
            {
                //if the answer has a period or quotation mark or colon or semicolon it finds a new one
                if ((data2.results[0].correct_answer[i] === ".") || (data2.results[0].correct_answer[i] === "'") || (data2.results[0].correct_answer[i] === ";") || (data2.results[0].correct_answer[i] === ":")|| (data2.results[0].correct_answer[i] === "!")|| (data2.results[0].correct_answer[i] === "1")|| (data2.results[0].correct_answer[i] === "2")|| (data2.results[0].correct_answer[i] === "3")|| (data2.results[0].correct_answer[i] === "4")|| (data2.results[0].correct_answer[i] === "5")|| (data2.results[0].correct_answer[i] === "6")|| (data2.results[0].correct_answer[i] === "7")|| (data2.results[0].correct_answer[i] === "8")|| (data2.results[0].correct_answer[i] === "9")|| (data2.results[0].correct_answer[i] === "0")  || (data2.results[0].correct_answer[i] === "-")  || (data2.results[0].correct_answer[i] === ",")  || (data2.results[0].correct_answer[i] === "?")  || (data2.results[0].correct_answer[i] === "@")  || (data2.results[0].correct_answer[i] === "#")  || (data2.results[0].correct_answer[i] === "$")  || (data2.results[0].correct_answer[i] === "%")  || (data2.results[0].correct_answer[i] === "^")  || (data2.results[0].correct_answer[i] === "&")  || (data2.results[0].correct_answer[i] === "*")  || (data2.results[0].correct_answer[i] === "(")  || (data2.results[0].correct_answer[i] === ")")  || (data2.results[0].correct_answer[i] === "_")  || (data2.results[0].correct_answer[i] === "+")  || (data2.results[0].correct_answer[i] === "="))
                {
                    //STEP 3
                    
                    //if any of the characters above are in the answer, runTrivia again until we find a valid q&A
                    runTrivia();
                    return;
                }
                else
                {
                   //STEP 3
                    //if the q&a is valid, we do nothing and continue below without running runTrivia again
                }
            }

            //make an <li> for the valid question and valid answer, and append both li's to the body.  We then push the q&a to a currentQuestionArray and a currentAnswerArray. 
            for (let i = 0; i < data2.results.length; i++)
            {          
                currentQuestionArray[0] = data2.results[i].question;
                currentAnswerArray[0] = data2.results[i].correct_answer;
            }

            //STEP 5

            //after we get our valid question and answer, we create the board since we now know how many letters and spaces are in the q&a
            currentAnswerLength = currentAnswerArray[0].length;
            updateBoard();
        });       
}



//STEP 5

//after we get a valid question and answer, we update the board with the right number of letters on the answer board
let updateBoard = () =>
{
    //create a div for the board and append it to the body
    let $board = $("<div>").attr("class","board");
    $("#boardRow").append($board);
    
    //for each character in the answer, if its a space, color it one way and give it one class, if its a letter, color it a different way and give it a different class
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
    //STEP 6

    //after we create the board, we create the buttons with each letter of the alphabet that the user can touch to guess the next letter
    createLetterButtons();

    //STEP 7

    //after we get a valid q&a, create the board, and create the letterInputArea, we wait for the user to click one of the letterInputArea buttons
    $( () =>
    { 
        
        
        $(".letterBox").on("click", (event) =>
        {   
            
        //the $currentBox is the button that was clicked, and the letter text is the next variable       
        let $currentBox = $(event.currentTarget);
        let $currentBoxText = $currentBox.text();
        $currentBox.prop("disabled",true);
        $(".spinWheel").prop("disabled",false);
        $(".solvePuzzle").prop("disabled",false);
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
                $currentBox.css("background","lightblue");
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
                
                    $(".firstPlayer").text(`Player 1 - $${firstPlayerArray[0]}`);
                    let $prizePopUp = $("<div>").attr("class","prizePopUp")
                    $prizePopUp.text("+$" + prizeMoney);
                    $prizePopUp.css("color","green");
        
                    $("#firstPlayerPrizePopUpArea").append($prizePopUp);
                    $prizePopUp.show(1).delay(1000).hide(1);      
                }
                else
                {
                    secondPlayerArray[0] += prizeMoney;
                    $(".secondPlayer").text(`Player 2 - $${secondPlayerArray[0]}`);
                    let $prizePopUp = $("<div>").attr("class","prizePopUp");
                    $prizePopUp.text("+$" + prizeMoney);
                    $prizePopUp.css("color","green");
                    $("#secondPlayerPrizePopUpArea").append($prizePopUp);
                    $prizePopUp.show(1).delay(1000).hide(1); 
                }
                prizeMoney = 0;

            }
            else
            {
                prizeMoney += (currentLetterValue * correctGuessesThisTurn);
                $currentBox.css("opacity",0.5);
                $currentBox.css("background","lightgreen");


                let randomIncorrectClipLength = incorrectClip.length;
                let randomIncorrectClipIndex = Math.floor(Math.random() * (randomIncorrectClipLength));

                $(`audio${incorrectClip[randomIncorrectClipIndex]}`)[0].play()

                if (currentPlayer === "player1")
                {
                    currentPlayer = "player2";
                    otherPlayer = "player1";
                    $(".secondPlayer").css("background","lightgreen");
                    $(".firstPlayer").css("background","pink");

                    let $prizePopUp = $("<div>").attr("class","prizePopUp")
                    $prizePopUp.text("+$" + prizeMoney);
                    $prizePopUp.css("color","red");
                    $("#firstPlayerPrizePopUpArea").append($prizePopUp);
                    $prizePopUp.show(1).delay(1000).hide(1);
                }
                else
                {
                    currentPlayer = "player1";
                    otherPlayer = "player2"; 
                    $(".firstPlayer").css("background","lightgreen");
                    $(".secondPlayer").css("background","pink");

                    let $prizePopUp = $("<div>").attr("class","prizePopUp")
                    $prizePopUp.text("+$" + prizeMoney);
                    $prizePopUp.css("color","red");
                    $("#secondPlayerPrizePopUpArea").append($prizePopUp);
                    $prizePopUp.show(1).delay(1000).hide(1);
                }
        
            }
            //$(".spinWheel").prop("disabled",false);
            if ((correctGuessCounter + spaceBoxCounter) === currentAnswerLength)
            {

                let $prizePopUp = $("<div>").attr("class","prizePopUp")
                $prizePopUp.text("+$500");
                $prizePopUp.css("width","50px");
                $prizePopUp.css("height","50px");
                $prizePopUp.css("background","lightblue");
                $prizePopUp.css("font-size","24px");
                $prizePopUp.css("color","green");
                $("body").append($prizePopUp);
                $prizePopUp.show(1).delay(1000).hide(1);

                let randomVictoryClipLength = victoryClip.length;
                let randomVictoryClipIndex = Math.floor(Math.random() * (randomVictoryClipLength));
                $(`audio${victoryClip[randomVictoryClipIndex]}`)[0].play()
                alert("You solved the puzzle.  Here's an extra $500!");

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

            

            $( () =>
            { 
                $(".solvePuzzle").on("click", (event) =>
                { 
                    debugger;
    
                    solvePuzzleString = "";
            
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
                    $($form).appendTo("#firstPlayerSpinArea")
                    $form.show();
            
                    $form.attr("placeholder",solvePuzzleString);
                    let correctAnswer = currentAnswerArray[0].toUpperCase()
            
                    $(".form").submit(function()
                    {
                        let inputText = $("#inputText");
                        if (correctAnswer === inputText.val())
                        {
                            alert("you got it right!");
                        }
                        else
                        {  
                            alert("you got it wrong");
                        }
                    })   
                });
            });
        });
    });
}



//  STEP 1

$( () =>
{ 
    $("#button5").on("click", (event) =>
    {          
            debugger;
            $("#button5").prop("disabled",true);
            runTrivia();
            
    });
});

//STEP 6

//creates a button for the letters A to Z that the user can press to guess a new letter
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

    let $spinWheel = $("<button class = 'spinWheel'>Spin Wheel</button>");
    let $solvePuzzle = $("<button class = 'solvePuzzle'>Solve Puzzle - NOT Finished Yet</button>");

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
    
    //$(".letterBox").prop("disabled",true);

    $("#firstPlayerSpinArea").append($spinWheel); 
    $("#firstPlayerSpinArea").append($solvePuzzle);

    $($spinWheel).clone().appendTo("#secondPlayerSpinArea");
    $($solvePuzzle).clone().appendTo("#secondPlayerSpinArea");

    $("#letterInputAreaRow").append($letterInputArea);

    
    $(".spinWheel").on("click", (event) =>
    { 
        debugger;
        $(".letterBox").prop("disabled",false);
        $(".spinWheel").prop("disabled",true);
        $(".solvePuzzle").prop("disabled",true);
        rotateWheel();
    });

    //STEP 7

    //now everything is complete, we wait for letterInputArea buttons to be clicked.
}






    

    

        

    

    
    
