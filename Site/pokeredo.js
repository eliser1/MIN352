// Show loading .gif
$(window).load(function() {
    $(".se-pre-con").fadeOut("show");;
});
// Set color variables
var grassColor = "rgba(155, 204, 80, 0.375)";
var poisonColor = "rgba(185, 127, 201, 0.375)";
var fireColor = "rgba(253, 125, 36, 0.375)";
var flyingColor = "linear-gradient(180deg, rgba(61, 199, 239, 0.375) 50%, rgba(189, 185, 184, 0.375) 50%)";
var waterColor = "rgba(69, 146, 196, 0.375)";
var bugColor = "rgba(114, 159, 63, 0.375)";
var normalColor = "rgba(164, 172, 175, 0.375)";
var electricColor = "rgba(238, 213, 53, 0.375)";
var groundColor = "linear-gradient(180deg, rgba(238, 213, 53, 0.375) 50%, rgba(171, 152, 66, 0.375) 50%)";
var fairyColor = "rgba(253, 185, 233, 0.375)";
var psychicColor = "rgba(243, 102, 185, 0.375)";
var fightingColor = "rgba(213, 103, 35, 0.375)";
var rockColor = "rgba(163, 140, 33, 0.375)";
var steelColor = "rgba(158, 183, 184, 0.375)";
var iceColor = "rgba(81, 1, 231, 0.375)";
var ghostColor = "rgba(123, 98, 163, 0.375)";
var dragonColor = "linear-gradient(180deg, rgba(83, 164, 207, 0.375) 50%, rgba(241, 95, 90, 0.375) 50%)";
var darkColor = "rgba(112, 112, 112, 0.375)";
// Set Oak screen variables
var oakhome = document.getElementById("oakhome");
var oakhelp = document.getElementById("oakhelp");
var oakcustom = document.getElementById("oakcustom");
var oaksort = document.getElementById("oaksort");
var oaksearch = document.getElementById("oaksearch");
var oakinfo = document.getElementById("oakinfo");
var oakbegin = document.getElementById("oakbegin");
// Add event listeners to the different balls to change themes
document.getElementById("pokeball").addEventListener("click", changeThemeP);
document.getElementById("greatball").addEventListener("click", changeThemeG);
document.getElementById("ultraball").addEventListener("click", changeThemeU);
document.getElementById("masterball").addEventListener("click", changeThemeM);
document.getElementById("premierball").addEventListener("click", changeThemePr);
// Set variabbles to help in changing themes
var pokeicon = document.getElementById("pokeicon");
var stylesheet = document.getElementById("stylesheet");
var theme = localStorage.getItem("theme");
// Call .json file and send it to server
let requestURL = 'https://eliser1.github.io/MIN352/Site/pokemon.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
// Show and create all Pokemon based on .json file
request.onload = function() {
    const pokemonData = request.response;
    showPokemon(pokemonData);
}
function showPokemon(jsonObj) {
    var pokemon = jsonObj;
    var myRow = document.getElementById('mainrow');
    for (var i = 0; i < pokemon.name.length; i++) {
        const myDiv = document.createElement('div');
        myDiv.classList.add("col-lg-3");
        myDiv.classList.add("col-sm-4");
        myDiv.classList.add("pokemon");
        const type1 = jsonObj.type1[i] + "p";
        myDiv.classList.add(type1);
        if (jsonObj.type2[i] === null) {
            }
        else {
            var type2 = jsonObj.type2[i] + "p";
            myDiv.classList.add(type2);
            }
        const myAnchor = document.createElement('a');
        myAnchor.href = jsonObj.name[i] + ".html";
        const myImg = document.createElement('img');
        myImg.classList.add("img-thumbnail");
        myImg.src = "../" + jsonObj.name[i] + ".svg";
        const myH2 = document.createElement('h2');
        myH2.classList.add("name");
        const myNumber = document.createElement('p');
        myNumber.classList.add("number");
        myH2.textContent = pokemon.name[i];
        myNumber.textContent = pokemon.number[i];
        myAnchor.appendChild(myImg);
        myDiv.appendChild(myAnchor);
        myDiv.appendChild(myH2);
        myDiv.appendChild(myNumber);
        myRow.appendChild(myDiv);
        if (jsonObj.type2[i] === null) {
            myImg.style.background = eval(jsonObj.type1[i] + "Color");
            }
        else {
            var color1 = eval(jsonObj.type1[i] + "Color");
            var color2 = eval(jsonObj.type2[i] + "Color");
        if ((color1 === dragonColor) && (color2 == flyingColor)) {
            myImg.style.background = "linear-gradient(180deg, rgba(83, 164, 207, 0.375) 25%, rgba(241, 95, 90, 0.375) 25% 50%, rgba(61, 199, 239, 0.375) 50% 75%, rgba(189, 185, 184, 0.375) 75%)";
            }  

        else if (color1 === flyingColor) {
            myImg.style.background = "linear-gradient(180deg, rgba(61, 199, 239, 0.375) 25%, rgba(189, 185, 184, 0.375) 25% 50%, " + color2 +" 50%)";
            }
        else if (color2 === flyingColor) {
            myImg.style.background = "linear-gradient(180deg, " + color1 + " 50%, rgba(61, 199, 239, 0.375) 50% 75%, rgba(189, 185, 184, 0.375) 75%)";
            }
        else if (color1 === groundColor) {
            myImg.style.background = "linear-gradient(180deg, rgba(238, 213, 53, 0.375) 25%, rgba(171, 152, 66, 0.375) 25% 50%, " + color2 +" 50%)";
            }
        else if (color2 === groundColor) {
            myImg.style.background = "linear-gradient(180deg, " + color1 + " 50%, rgba(238, 213, 53, 0.375) 50% 75%, rgba(171, 152, 66, 0.375) 75%)";
            }
        else if (color1 === dragonColor) {
            myImg.style.background = "linear-gradient(180deg, rgba(83, 164, 207, 0.375) 25%, rgba(241, 95, 90, 0.375) 25% 50%, " + color2 +" 50%)";
            }
        else if (color2 === dragonColor) {
            myImg.style.background = "linear-gradient(180deg, " + color1 + " 50%, rgba(83, 164, 207, 0.375) 50% 75%, rgba(241, 95, 90, 0.375) 75%)";
            }
        else {
            myImg.style.background = "linear-gradient(180deg, " + color1 + " 50%, " + color2 + " 50%)";
            }
        }
    }
}
// Filter Pokemon by type
function filterSelection(c) {
    oakhome.style.display = "none";
    oakhelp.style.display = "none";
    oakcustom.style.display = "none";
    oaksort.style.display = "none";
    oaksearch.style.display = "none";
    oakinfo.style.display = "none";
    oakbegin.style.display = "none";

    var i;
    var poke = document.getElementsByClassName("pokemon");
    if (c=="all") {
        c="";
    }
    for (i = 0; i < poke.length; i++) {
        removeClass(poke[i], "show");
        if (poke[i].className.indexOf(c) > -1) {
            addClass(poke[i], "show");
        }
    }
}
// Oak screen display settings
function showHelp() {
    filterSelection();
    oakhome.style.display = "none";
    oakhelp.style.display = "block";
    oakcustom.style.display = "none";
    oaksort.style.display = "none";
    oaksearch.style.display = "none";
    oakinfo.style.display = "none";
    oakbegin.style.display = "none";
}
function showCustom() {
    filterSelection();
    oakhome.style.display = "none";
    oakhelp.style.display = "none";
    oakcustom.style.display = "block";
    oaksort.style.display = "none";
    oaksearch.style.display = "none";
    oakinfo.style.display = "none";
    oakbegin.style.display = "none";
}
function showSort() {
    filterSelection();
    oakhome.style.display = "none";
    oakhelp.style.display = "none";
    oakcustom.style.display = "none";
    oaksort.style.display = "block";
    oaksearch.style.display = "none";
    oakinfo.style.display = "none";
    oakbegin.style.display = "none";
}
function showSearch() {
    filterSelection();
    oakhome.style.display = "none";
    oakhelp.style.display = "none";
    oakcustom.style.display = "none";
    oaksort.style.display = "none";
    oaksearch.style.display = "block";
    oakinfo.style.display = "none";
    oakbegin.style.display = "none";
}
function showInfo() {
    filterSelection();
    oakhome.style.display = "none";
    oakhelp.style.display = "none";
    oakcustom.style.display = "none";
    oaksort.style.display = "none";
    oaksearch.style.display = "none";
    oakinfo.style.display = "block";
    oakbegin.style.display = "none";
}
function showEnd(){
    oakhome.style.display = "none";
    oakhelp.style.display = "none";
    oakcustom.style.display = "none";
    oaksort.style.display = "none";
    oaksearch.style.display = "none";
    oakinfo.style.display = "none";
    oakbegin.style.display = "block";
}
// Show only Pokemon of certain type
function addClass(element, name) {
    var i;
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}
// Remove Pokemon of other types
function removeClass(element, name) {
    var i;
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Search Pokemon by name and filter out those that don't match
function searchFunction() {
    var input = document.getElementById('searchinput');
    var filter = input.value.toUpperCase();
    var div = document.getElementById("mainrow");
    var poke = div.getElementsByClassName('pokemon');
    for (i = 0; i < poke.length; i++) {
        var h2 = poke[i].getElementsByTagName("h2")[0];
        var txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            poke[i].style.display = "";
            } 
        else {
            poke[i].style.display = "none";
            }
    }
}
// Sets theme var to certain style sheet and changes Pokeball type depending on theme selected
function changeThemeP(){
    theme = "poke.css";
    localStorage.setItem("theme","poke.css");
    stylesheet.href = theme;
    pokeicon.src = "../Pokeball.svg";
}
function changeThemeG(){
    theme = "great.css";
    stylesheet.href = theme;
    pokeicon.src = "../GreatBall.svg";
    localStorage.setItem("theme","great.css");
}
function changeThemeU(){
    theme = "ultra.css";
    stylesheet.href = theme;
    pokeicon.src = "../UltraBall.svg";
    localStorage.setItem("theme","ultra.css");
}
function changeThemeM(){
    theme = "master.css";
    stylesheet.href = theme;
    pokeicon.src = "../MasterBall.svg";
    localStorage.setItem("theme","master.css");
}
function changeThemePr(){
    theme = "premier.css";
    stylesheet.href = theme;
    pokeicon.src = "../PremierBall.svg";
    localStorage.setItem("theme","premier.css");
}
// Sets theme based on previous selection and maintains icon change
stylesheet.href = theme;
if (theme === "poke.css") {
    pokeicon.src = "../Pokeball.svg";
}
else if (theme === "great.css") {
    pokeicon.src = "../GreatBall.svg";
}
else if (theme === "ultra.css") {
    pokeicon.src = "../UltraBall.svg";
}
else if (theme === "master.css") {
    pokeicon.src = "../MasterBall.svg";
}
else if (theme === "premier.css") {
    pokeicon.src = "../PremierBall.svg";
}
else {
    pokeicon.src = "../Pokeball.svg";
    stylesheet.href = "poke.css";
}