      var row = document.getElementById("header");
      var requestURL = 'https://eliser1.github.io/MIN352/Site/pokemon.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
        var pokemonData = request.response;
        showPokemon(pokemonData);
      }


      function showPokemon(jsonObj) {
        var pokemon = jsonObj;
        console.log(pokemon);
        for (var i = 0; i < pokemon.length; i++) {
          var myDiv = document.createElement('div');
            myDiv.classList.add("col-lg-3").add("col-md-4").add("col-sm-4").add("pokemon");
          var myImg = document.createElement('img');
            myImg.classList.add("img-thumbnail");
            myImg.src = jsonObj['img'];
          var myH2 = document.createElement('h2');
            myH2.classList.add("name");
          var myNumber = document.createElement('p');
            myNumber.classList.add("number");
          var myTypeRow = document.createElement('div');
            myTypeRow.classList.add("row");
          var myType1 = document.createElement('div');
            myType1.classList.add(jsonObj['type1']);
          var myType2 = document.createElement('div');
            myType2.classList.add(jsonObj['type2']);

          myH2.textContent = pokemon[i].name;
          myNumber.textContent = pokemon[i].number;
          myType1.textContent = pokemon[i].type1;
          myType2.textContent = pokemon[i].type2;
          
          myDiv.appendChild(myImg);
          myDiv.appendChild(myH2);
          myDiv.appendChild(myNumber);
          myDiv.appendChild(myType1);
          myDiv.appendChild(myType2);

          section.appendChild(myDiv);
      }
    }

      document.getElementById("pokeball").addEventListener("click", changeThemeP);
      document.getElementById("greatball").addEventListener("click", changeThemeG);
      document.getElementById("ultraball").addEventListener("click", changeThemeU);
      document.getElementById("masterball").addEventListener("click", changeThemeM);
      document.getElementById("premierball").addEventListener("click", changeThemePr);
      
      var pokeicon = document.getElementById("pokeicon");
      var stylesheet = document.getElementById("stylesheet");

      theme = localStorage.getItem("theme");
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

      function changeThemeP(){
          theme = "poke.css"
          localStorage.setItem("theme","poke.css");
          stylesheet.href = theme;
          pokeicon.src = "../Pokeball.svg"
        }
      function changeThemeG(){
          theme = "great.css"
          stylesheet.href = theme;
          pokeicon.src = "../GreatBall.svg"
          localStorage.setItem("theme","great.css");
        }
      function changeThemeU(){
        theme = "ultra.css"
        stylesheet.href = theme;
        pokeicon.src = "../UltraBall.svg"
        localStorage.setItem("theme","ultra.css");
      }
      function changeThemeM(){
        theme = "master.css"
        stylesheet.href = theme;
        pokeicon.src = "../MasterBall.svg"
        localStorage.setItem("theme","master.css");
      }
      function changeThemePr(){
        theme = "premier.css"
        stylesheet.href = theme;
        pokeicon.src = "../PremierBall.svg"
        localStorage.setItem("theme","premier.css");
      }