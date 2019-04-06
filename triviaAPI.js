let questionArray = [];
let answerArray = [];
let imdbID = "tt";
let topicArray = ["Movie","Star Wars","Trivia"]
let randomTopic = Math.random();

if (randomTopic < .5)
{
    randomTopic = 1;
}
else
{
    randomTopic = 2;
}

let currentAnswerLength = 0;
let answerBox = "";
let currentQuestionArray = [];
let currentAnswerArray = [];





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
                if ((data.results[randomStarWars].name[i] === ".") || (data.results[randomStarWars].name[i] === "'") || (data.results[randomStarWars].name[i] === ";") || (data.results[randomStarWars].name[i] === ":"))
                {
                    runStarWars();
                    return;
                }
                else
                {

                }
            }

            currentAnswerArray[0] = data.results[randomStarWars].name;

            currentAnswerLength = currentAnswerArray[0].length;
            updateBoard();


        });

        
}

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
            for (let i = 0; i < (data2.results[0].correct_answer.length); i++)
            {
                if ((data2.results[0].correct_answer[i] === ".") || (data2.results[0].correct_answer[i] === "'") || (data2.results[0].correct_answer[i] === ";") || (data2.results[0].correct_answer[i] === ":"))
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
                let $li2 = $("<li>").text(data2.results[i].question)
                let $li3 = $("<li>").text(data2.results[i].correct_answer)
                $("body").append($li2);
                $("body").append($li3);
                currentQuestionArray[0] = data2.results[i].question;
                currentAnswerArray[0] = data2.results[i].correct_answer;
            }

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
        })
}

let updateBoard = () =>
{
    let $board = $("<div>").attr("class","board");
    $("body").append($board);
    
    for (let i = 0; i < currentAnswerLength; i++)
    {
        if ((currentAnswerArray[0][i]) === " ")
        {
            $spaceBox = $("<div>").attr("class","spaceBox");
            $spaceBox.text(currentAnswerArray[0][i].toUpperCase());
            $($board).append($spaceBox);
            
        }
        else
        {
            $answerBox = $("<div>").attr("class","answerBox");
            $answerBox.text(currentAnswerArray[0][i].toUpperCase());
            $($board).append($answerBox);
        }

    }
}

$( () =>
{ 
    $("button").on("click", (event) =>
    {
        debugger;
                
        if (randomTopic === 0)
        {
            //randomMovieNumber();
            //runMovie();
        }
        else if (randomTopic === 1)
        {
            runStarWars();
        }
        else if(randomTopic === 2)
        {
            runTrivia();
        }
        else
        {

        }

    });
});
