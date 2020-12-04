var btn = document.querySelector("#btn");
var output=document.querySelector("#output");
var input=document.querySelector("#txt");

var text= document.querySelector("small");
var bg = 'yellow';

var serverURL ="https://api.funtranslations.com/translate/minion.json";

function getTranslation(input){
  return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something is wrong with the server! Try again later")
}

function clickHandler(){
    var inputText=input.value;

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
          var translatedText = json.contents.translated;
          output.innerHTML=translatedText; //output
        })
        .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);


// changing background color

btn.addEventListener("click",function(){
    const col1= 'rgb(255,247,1)'; //yellow
    const col ='rgb(128,0,128)'; //purple
   
    if(bg === 'yellow')
    {
        document.body.style.backgroundColor=col;
        bg = 'purple';
        text.innerHTML="EVIL MINION";
    }
    else
    {
        document.body.style.backgroundColor=col1;
        bg='yellow';
        text.innerHTML="INNOCENT MINION";
    } 
})
