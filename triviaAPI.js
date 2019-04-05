let questionArray = [];
let answerArray = [];
let imdbID = "tt";

let randomMovieNumber = () =>
{

    let imdbRandom = String(Math.floor(Math.random() * 2404799));

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
        for (let i = 0; i < data.results.length; i++)
        {
            let $li = $("<li>").text(data.results[i].name)
            $("body").append($li);
            questionArray.push($li);
            answerArray.push($li);
        }
    });
}

let runTrivia = () =>
{
    $.ajax(
        {   
            url: "https://opentdb.com/api.php?amount=200",
            type: "GET",
            data2:
            {
            "$limit" : 10,
            "$$app_token" : "https://opentdb.com/api_token.php?command=request"
            }
        }).done(function(data2) 
        {
            for (let i = 0; i < data2.results.length; i++)
            {
                let $li2 = $("<li>").text(data2.results[i].question)
                $("body").append($li2);
                questionArray.push($li2);
                answerArray.push($li2);
            }
        });
}

let runMovie = () =>
{

    $.ajax(
        {   
            url: "http://www.omdbapi.com/?apikey=29372440&i=0000001",
            type: "GET",
            data3:
            {
            "$limit" : 10,
            //"$$app_token" : "29372440"
            }
        }).then(function(data3) 
        {   
            let director = data3.Director;
            let year = data3.Year;
            let actors = data3.Actors;
            let rating = data3.Ratings;
            let title = data3.Title;
            let typeMovie = data3.Type;
    
            /*
            if (typeMovie === "movie")
            {

            }  
            
            else 
            {
                imdbID = "tt";
                randomMovieNumber();
                runMovie();
                return;
            }
            */
            
            let $li3 = $(`<li>Director:  ${director}</li>`);
            let $li4 = $(`<li>Year:  ${year}</li>`);
            let $li5 = $(`<li>Actors:  ${actors}</li>`);
            let $li6 = $(`<li>Rating:  ${rating}</li>`);
            let $li7 = $(`<li>Title:  ${title}</li>`);
            let $li8 = $(`<li>Type of Media:  ${typeMovie}</li>`);

            $("body").append($li3);
            $("body").append($li4);
            $("body").append($li5);
            $("body").append($li6);
            $("body").append($li8);

            $("body").append($li7);

            questionArray.push($li3.text());
            answerArray.push($li7.text());
            console.log(data3);
        })
}

$( () =>
{ 
    $("button").on("click", (event) =>
    {
        randomMovieNumber();
        runMovie();   
    });
});

