var inputname = document.querySelector(".text");
var res = document.querySelector(".btn");
var output = document.querySelector(".out");

var serverurl = "https://api.funtranslations.com/translate/pig-latin.json"


function gettranslationURl(input)
{
    return serverurl+"?"+"text="+input;
}
function errorHandler(error){
    console.log("error occured") ;
    alert("Something wrong with error. Try again after sometime");
 }

function clickHandler(e){
    e.preventDefault();
    console.log("yes");
    var inputtext = inputname.value;
    fetch(gettranslationURl(inputtext))
    .then(response =>response.json())
    .then( (data) => {

        var translatedtext = data.contents.translated.toUpperCase();
        if(translatedtext === undefined)
        {
            console.error("oops");
          
        }
        output.innerText = translatedtext;
    })
    .catch(errorHandler)
};


res.addEventListener("click", clickHandler);