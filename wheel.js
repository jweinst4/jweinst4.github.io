
    let winner = 0;   
    let arrayID = [];
    let arrayX = [];
    let arrayID2 = [];
    let arrayX2 = [];
    let arrayTime = [];


let rotateWheel = () =>
{

    let randomIterations = Math.floor(Math.random() * 35);
    randomIterations += 35;
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
};

let questionArray = [];
let answerArray = [];
let imdbID = "tt";
let topicArray = ["Movie","Star Wars","Trivia"]
let randomTopic = Math.random();

if (randomTopic < .5)
{
    randomTopic = 2;
}
else
{
    randomTopic = 2;
}

let currentAnswerLength = 0;
let answerBox = "";
let currentQuestionArray = [];
let currentAnswerArray = [];
let correctGuessCounter = 0;
let prizeMoney = 0;
let currentLetterValue = 200;
let prizeMoneyPrior = 0;

//gets random movie
let randomMovieNumber = () =>
{

    let imdbRandom = String(Math.floor(Math.random() * 6999999));

    if (imdbRandom.length === 1)
    {
        imdbID += "000000";
    }
    else if (imdbRandom.length === 2)
    {
        imdbID += "00000";
    }
    else if (imdbRandom.length === 3)
    {
        imdbID += "0000";
    }
    else if (imdbRandom.length === 4)
    {
        imdbID += "000";
    }
    else if (imdbRandom.length === 5)
    {
        imdbID += "00";
    }
    else if (imdbRandom.length === 6)
    {
        imdbID +=  "0";
    }
    else
    {
        
    }
    imdbID += imdbRandom;
}


let runStarWars = () =>
{
    $.ajax(
        {   
            url: "https://swapi.co/api/people?amount=100",
            type: "GET",
            data:
            {
            "$limit" : 100,
            //"$$app_token" : ""
            }
        }).done(function(data) 
        {
            let randomStarWars = Math.floor((Math.random() * data.results.length));

            for (let i = 0; i < (data.results[randomStarWars].name.length); i++)
            {
                //if the answer has special characters, find a new q&a
                if ((data.results[randomStarWars].name[i] === ".") || (data.results[randomStarWars].name[i] === "'") || (data.results[randomStarWars].name[i] === ";") || (data.results[randomStarWars].name[i] === ":"))
                {
                    runStarWars();
                    return;
                }
                else
                {

                }
            }

            //puts the name of a star wars character into the answer array
            currentAnswerArray[0] = data.results[randomStarWars].name;

            currentAnswerLength = currentAnswerArray[0].length;

            //updates the board to have the correct number of spaces and letters as the answer
            updateBoard();


        });

        
}

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
            for (let i = 0; i < (data2.results[0].correct_answer.length); i++)
            {
                //if the answer has a period or quotation mark or colon or semicolon it finds a new one
                if ((data2.results[0].correct_answer[i] === ".") || (data2.results[0].correct_answer[i] === "'") || (data2.results[0].correct_answer[i] === ";") || (data2.results[0].correct_answer[i] === ":")|| (data2.results[0].correct_answer[i] === "!")|| (data2.results[0].correct_answer[i] === "1")|| (data2.results[0].correct_answer[i] === "2")|| (data2.results[0].correct_answer[i] === "3")|| (data2.results[0].correct_answer[i] === "4")|| (data2.results[0].correct_answer[i] === "5")|| (data2.results[0].correct_answer[i] === "6")|| (data2.results[0].correct_answer[i] === "7")|| (data2.results[0].correct_answer[i] === "8")|| (data2.results[0].correct_answer[i] === "9")|| (data2.results[0].correct_answer[i] === "0"))
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

            for (let i = 0; i < (data2.results[0].question.length); i++)
            {
                //if the answer has a period or quotation mark or colon or semicolon it finds a new one
                if ((data2.results[0].question[i] === ".") || (data2.results[0].question[i] === ";") || (data2.results[0].question[i] === ":")|| (data2.results[0].question[i] === "!") || (data2.results[0].question[i] === "1")|| (data2.results[0].question[i] === "2")|| (data2.results[0].question[i] === "3")|| (data2.results[0].question[i] === "4")|| (data2.results[0].question[i] === "5")|| (data2.results[0].question[i] === "6")|| (data2.results[0].question[i] === "7")|| (data2.results[0].question[i] === "8")|| (data2.results[0].question[i] === "9")|| (data2.results[0].question[i] === "0"))
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
            //STEP 4

            //  WILL REMOVE AFTER TESTING.

            //make an <li> for the valid question and valid answer, and append both li's to the body.  We then push the q&a to a currentQuestionArray and a currentAnswerArray. 
            for (let i = 0; i < data2.results.length; i++)
            {
                
                let $li2 = $("<li>").text(data2.results[i].question)
                let $li3 = $("<li>").text(data2.results[i].correct_answer)
                //$("body").append($li2);
                //$("body").append($li3);
                currentQuestionArray[0] = data2.results[i].question;
                currentAnswerArray[0] = data2.results[i].correct_answer;
            }

            //STEP 5

            //after we get our valid question and answer, we create the board since we now know how many letters and spaces are in the q&a
            currentAnswerLength = currentAnswerArray[0].length;
            updateBoard();
        });

        
}

let runMovie = () =>
{

    $.ajax(
        {   
            url: "http://www.omdbapi.com/?apikey=29372440&i=" + imdbID,
            type: "GET",
            data3:
            {
            "$limit" : 100,
            //"$$app_token" : "29372440"
            }
        }).then(function(data3) 
        {   
            let director = data3.Director;
            let year = data3.Year;
            let actors = data3.Actors;
            let rating = Number(data3.imdbRating);
            let title = data3.Title;
            let typeMovie = data3.Type;
            let country = data3.Country;
            let rated = data3.Rated;
            
            
            if ((typeMovie === "movie") && (country === "USA") && (rating > 7.0) && (rated!== "N/A") && (year > 2000))
            {
            
            }  
            
            else 
            {
                imdbID = "tt";
                randomMovieNumber();
                runMovie();
                return;
            }
            
            let $li3 = $(`<li>Director:  ${director}</li>`);
            let $li4 = $(`<li>Year:  ${year}</li>`);
            let $li5 = $(`<li>Actors:  ${actors}</li>`);
            //let $li6 = $(`<li>Rating:  ${rating}</li>`);
            let $li7 = $(`<li>Title:  ${title}</li>`);
            let $li8 = $(`<li>Type of Media:  ${typeMovie}</li>`);
            let $li9 = $(`<li>Country:  ${country}</li>`);
            //let $li10 = $(`<li>:  ${}</li>`);

            $("body").append($li3);
            $("body").append($li4);
            $("body").append($li5);
            //$("body").append($li6);
            $("body").append($li8);
            $("body").append($li9);

            $("body").append($li7);

            questionArray.push($li3.text());
            answerArray.push($li7.text());
            console.log(data3);
    
            // for ()
        })
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
let currentPlayer = "player1";
let otherPlayer = "player2";
let firstPlayerPrizeMoney = 0;
let secondPlayerPrizeMoney = 0;
let firstPlayerArray = [0];
let secondPlayerArray = [0];
//after we get a valid q&a, create the board, and create the letterInputArea, we wait for the user to click one of the letterInputArea buttons
$( () =>
{ 
    
    $(".letterBox").on("click", (event) =>
    {   
     
       //the $currentBox is the button that was clicked, and the letter text is the next variable       
       let $currentBox = $(event.currentTarget);
       let $currentBoxText = $currentBox.text();
       $currentBox.prop("disabled",true)

       //we set the correctGuess to false, until the user clicks a letter that is in the answer
       let correctGuess = false;
       let correctGuessesThisTurn = 0;
       
        //after the user clicks a letter, we loop through the number of characters in the answer to see if any of them are the letter of the clicked button
         for (let i =0; i < currentAnswerLength; i++)
         {
            if (currentAnswerArray[0][i].toUpperCase() === $currentBoxText)
            {
                //if the answer includes the letter that was clicked, make the box show up green and change the correctGuess to true
         
                let targetAnswerBox = currentAnswerArray[0][i]
                let $targetAnswerBox = $(`.${targetAnswerBox}`)
                $targetAnswerBox.css("background","green");     
                correctGuess = true;
                correctGuessCounter++;
                correctGuessesThisTurn++;
            }
        }
        if (correctGuess)
        {
            $currentBox.css("opacity",0.5);
            $currentBox.css("background","lightblue");
            prizeMoney += (currentLetterValue * correctGuessesThisTurn);

            if (currentPlayer === "player1")
            {
                firstPlayerArray[0] += prizeMoney;
                $(".firstPlayer").text(`Player 1 - $${firstPlayerArray[0]}`);
            }
            else
            {
                secondPlayerArray[0] += prizeMoney;
                $(".secondPlayer").text(`Player 2 - $${secondPlayerArray[0]}`);
            }
            prizeMoney = 0;
        }
        else
        {
            prizeMoney += (currentLetterValue * correctGuessesThisTurn);
            $currentBox.css("opacity",0.5);
            $currentBox.css("background","lightgreen");

            if (currentPlayer === "player1")
            {
                currentPlayer = "player2";
                otherPlayer = "player1";
                $(".secondPlayer").css("background","lightgreen");
                $(".firstPlayer").css("background","pink");
            }
            else
            {
                currentPlayer = "player1";
                otherPlayer = "player2"; 
                $(".firstPlayer").css("background","lightgreen");
                $(".secondPlayer").css("background","pink");
            }
        }

        if (correctGuessCounter === currentAnswerLength)
        {
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
            return;
        }
    });
});
}

//  STEP 1

//when the user clicks the button, if the random number is a 0, get a  q&a from the movie API, if its a 1, get a q&a from the star wars API, if its a 3, get it from the trivia API.
$( () =>
{ 
    $("#button5").on("click", (event) =>
    {           
        if (randomTopic === 0)
        {
            //STEP 2
            //randomMovieNumber();
            //runMovie();
        }
        else if (randomTopic === 1)
        {
            //STEP 2
            runStarWars();
        }
        else if(randomTopic === 2)
        {
            //STEP 2
            rotateWheel();
            runTrivia();

        }
        else
        {

        }

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

    $("#letterInputAreaRow").append($letterInputArea);
    
    //STEP 7

    //now everything is complete, we wait for letterInputArea buttons to be clicked.
}



    

    

        

    

    
    
