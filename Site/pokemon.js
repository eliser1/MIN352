$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});
var requestURL = 'https://eliser1.github.io/MIN352/Site/pokemon.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var pokemonData = request.response;
  showPokemon(pokemonData);
};
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
function showPokemon(jsonObj) {
  var pokemon = jsonObj;
  var myRow = document.getElementById('mainrow');
  for (var i = 0; i < pokemon.name.length; i++) {
    var myDiv = document.createElement('div');
      myDiv.classList.add("col-lg-3");
      myDiv.classList.add("col-sm-4");
      myDiv.classList.add("pokemon");
      var type1 = jsonObj.type1[i] + "p";
      myDiv.classList.add(type1);
      if (jsonObj.type2[i] === null) {
      }
      else {
        var type2 = jsonObj.type2[i] + "p";
        myDiv.classList.add(type2);
      }
    var myAnchor = document.createElement('a');
      myAnchor.href = jsonObj.name[i] + ".html";
    var myImg = document.createElement('img');
      myImg.classList.add("img-thumbnail");
      myImg.src = "../" + jsonObj.name[i] + ".svg";
    var myH2 = document.createElement('h2');
      myH2.classList.add("name");
    var myNumber = document.createElement('p');
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
var oakhome = document.getElementById("oakhome");
var oakhelp = document.getElementById("oakhelp");
var oakcustom = document.getElementById("oakcustom");
var oaksort = document.getElementById("oaksort");
var oaksearch = document.getElementById("oaksearch");
var oakinfo = document.getElementById("oakinfo");
var oakbegin = document.getElementById("oakbegin");
 var visit = localStorage.getItem("visit");
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
      localStorage.setItem("visit", 1);
    }
function filterSelection(c) {
  oakhome.style.display = "none";
  oakhelp.style.display = "none";
  oakcustom.style.display = "none";
  oaksort.style.display = "none";
  oaksearch.style.display = "none";
  oakinfo.style.display = "none";
  oakbegin.style.display = "none";
  var i;
  var x = document.getElementsByClassName("pokemon");
  if (c=="all") {
    c="";
   }
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    console.log(x[i]);
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    }
  }
}
if (visit === null) {
  localStorage.setItem("theme", "poke.css");
  oakhome.style.display = "block";
  oakhelp.style.display = "none";
  oakcustom.style.display = "none";
  oaksort.style.display = "none";
  oaksearch.style.display = "none";
  oakinfo.style.display = "none";
  oakbegin.style.display = "none";
}
else {
  window.onload = function(){filterSelection('all');};
  oakhome.style.display = "none";
  oakhelp.style.display = "none";
  oakcustom.style.display = "none";
  oaksort.style.display = "none";
  oaksearch.style.display = "none";
  oakinfo.style.display = "none";
  oakbegin.style.display = "none";
}
function addClass(element, name) {
  var i;
  var arr1 = element.className.split(" ");
  // arr1 is all pokemon that match the type needed
  var arr2 = name.split(" ");
  // ".show"
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function removeClass(element, name) {
  var i;
  var arr1 = element.className.split(" ");
  // console.log(element.className.split(" "));
  // arr1 here is all pokemon of all types
  var arr2 = name.split(" ");
  for (i=0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
function searchFunction() {
  // Declare variables
  var input, filter, div, poke, h2, i, txtValue;
  input = document.getElementById('searchinput');
  filter = input.value.toUpperCase();
  div = document.getElementById("mainrow");
  poke = div.getElementsByClassName('pokemon');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < poke.length; i++) {
    h2 = poke[i].getElementsByTagName("h2")[0];
    txtValue = h2.textContent || h2.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      poke[i].style.display = "";
    } else {
      poke[i].style.display = "none";
    }
  }
}
  document.getElementById("pokeball").addEventListener("click", changeThemeP);
  document.getElementById("greatball").addEventListener("click", changeThemeG);
  document.getElementById("ultraball").addEventListener("click", changeThemeU);
  document.getElementById("masterball").addEventListener("click", changeThemeM);
  document.getElementById("premierball").addEventListener("click", changeThemePr);
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
  var pokeicon = document.getElementById("pokeicon");
  var stylesheet = document.getElementById("stylesheet");
  var theme = localStorage.getItem("theme");
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