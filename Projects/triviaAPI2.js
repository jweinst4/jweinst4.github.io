
  let unirest = require('unirest');
  
let runQuery = () =>
{

  
    unirest.get(API_URL)
  .header("X-RapidAPI-Key", "b7800b73ecmsh3f0a1c267264ef6p15dbf9jsnfdae8be18f73")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    });




    $.ajax(
    {   
        url: "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf",
        type: "GET",
        data:
        {
        "$limit" : 5,
        "$$app_token" : "b7800b73ecmsh3f0a1c267264ef6p15dbf9jsnfdae8be18f73"
        }
    }).done(function(data) 
    {
        console.log(data);
    });
}

$( () =>
{ 
    $("button").on("click", (event) =>
    {
        runQuery();   
    });
});
