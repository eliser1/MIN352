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