var fname = document.querySelector(".fname");
var bday = document.querySelector(".bday");
var year ="";
var char = document.querySelector(".char");
var squir = document.querySelector(".squir");
var bulb = document.querySelector(".bulb");
var element = "";
var football = document.querySelector(".foot");
var basketball = document.querySelector(".basket");
var soccor = document.querySelector(".soccor");
var type = "";
var submt = document.querySelector(".submt");


//event listners

//event of input fname
fname.addEventListener("change", setfname);
//event of input of bday
bday.addEventListener("change", setYear);
//event of input of pokemon
char.addEventListener("click", setPokemon);
squir.addEventListener("click", setPokemon);
bulb.addEventListener("click", setPokemon);
//event of input of sport
football.addEventListener("click", setSport);
basketball.addEventListener("click", setSport);
soccor.addEventListener("click", setSport);
//event of clicking the submit button
submt.addEventListener("click", generateIgn);

//functions

//sets firstname
function setfname(){
    fname.value = event.target.value;
    if (fname.value != ""){
        fname.required = false;
    } else{
        fname.required = true;
    }
}
//sets bday year
function setYear(){
    year = bday.value.substr(0,4);
}

//sets pokemone element
function setPokemon(){
    if(event.target.value === "charmander"){
        element = "Fire";
        char.required = false;
    } else if (event.target.value === "squrtle"){
        element = "Water";
        char.required = false;
    } else {
        element = "Earth";
        char.required = false;
    }
}

//sets sports type
function setSport(){
    if(event.target.value === "football"){
        type = "Charger";
        football.required = false;
    } else if(event.target.value === "basketball"){
        type = "Shooter";
        football.required = false;
    } else{
        type = "Striker"
        football.required = false;
    }
}

//generates in game name
function generateIgn(){
    if(!fname.required && !char.required && !football.required){
        alert(element+type+fname.value+year);
    }
}

