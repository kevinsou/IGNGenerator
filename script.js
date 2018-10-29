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
fname.addEventListener("change", setfname);

bday.addEventListener("change", setYear);

char.addEventListener("click", setPokemon);
squir.addEventListener("click", setPokemon);
bulb.addEventListener("click", setPokemon);

football.addEventListener("click", setSport);
basketball.addEventListener("click", setSport);
soccor.addEventListener("click", setSport);

submt.addEventListener("click", generateIgn);

//functions

function setfname(){
    fname.value = event.target.value;
    if (fname.value != ""){
        fname.required = false;
    } else{
        fname.required = true;
    }
}

function setYear(){
    year = bday.value.substr(0,4);
}

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

function generateIgn(){
    if(!fname.required && !char.required && !football.required){
        alert(element+type+fname.value+year);
    }
}

