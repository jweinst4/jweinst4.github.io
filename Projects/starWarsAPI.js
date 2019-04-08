

let runQuery = () =>
{
    $.ajax(
    {   
        url: "https://swapi.co/api/people?amount=100",
        type: "GET",
        data:
        {
        //"$limit" : 100,
        //"$$app_token" : ""
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
