"use strict";

// function ChangerLacouleur(params) {
//   changementDeBackground.addEventListener("click", () => {
//     const toggleClass = document.querySelectorAll(".toggleBlack");
//     const toggleClass1 = document.querySelectorAll(".toggleBlack1");
//     affichage("Europe");
//     DarkOrWhite = !DarkOrWhite;
//     console.log(DarkOrWhite);
//     toggleClass.forEach((all) => {
//       all.classList.toggle("toggleBlack2");
//     });
//     toggleClass1.forEach((all2) => {
//       all2.classList.toggle("toggleBlack3");
//     });
//   });
// }
// changementDeBackground.addEventListener("click", ChangerLacouleur);
avant;
var changementDeBackground = document.querySelector("header nav span");
var InputSeatch = document.querySelector("input");
var form = document.querySelector("form");
var Resultat = document.getElementById("resultat");
var resultatAuClick = document.getElementById("resultatAuClick"); // listes continent clique

var ListesContinent = document.querySelectorAll("Select-list ul");
console.log(ListesContinent); // changementDeBackground

var DarkOrWhite = false;
var ClassDarkOrWhite = "toggleBlack";
console.log(ClassDarkOrWhite);
changementDeBackground.addEventListener("click", function () {
  var toggleClass = document.querySelectorAll(".toggleBlack");
  var toggleClass1 = document.querySelectorAll(".toggleBlack1"); // const ContainerPays = document.querySelector(".Container-Pays");

  affichage();
  DarkOrWhite = !DarkOrWhite;
  console.log(DarkOrWhite);
  toggleClass.forEach(function (all) {
    all.classList.toggle("toggleBlack2");
  });
  toggleClass1.forEach(function (all2) {
    all2.classList.toggle("toggleBlack3");
  });
}); //////////////////////////////////////////////////////////
// clique continent

var select = document.querySelector(".Select");
var ul = document.querySelector("header form ul");
var li = document.querySelectorAll("header form ul li");
console.log(ul);
select.addEventListener("click", function () {
  ul.classList.toggle("display");
});
var continent = "";
li.forEach(function (continent) {
  affichage("Europe");
  continent.addEventListener("click", function (e) {
    continent = e.target.id;
    console.log(continent);
    affichage(e.target.id);
  });
}); //////////////////////////////////////////////////////////
// API;

var result = [];

function RecuperationApi() {
  return regeneratorRuntime.async(function RecuperationApi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://restcountries.com/v3.1/all").then(function (res) {
            return res.json();
          }).then(function (reponse) {
            result = reponse;
            console.log(result);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
} // targetVALUE


var ValueInput = "";
InputSeatch.addEventListener("input", function (e) {
  ValueInput = e.target.value;
  affichage();
}); // form.addEventListener("submit", () => {
//   console.log("p");
//   affichage();
//   console.log();
// });
//////////////////////////////////////////////////////////

function affichage(idContinent) {
  return regeneratorRuntime.async(function affichage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(RecuperationApi());

        case 2:
          console.log(idContinent);
          resultatAuClick.innerHTML = result.filter(function (pays) {
            var RegionSelect;

            if (DarkOrWhite == true) {
              ClassDarkOrWhite = "toggleBlack";
            } else if (DarkOrWhite == false) {
              ClassDarkOrWhite = "toggleBlack1";
            }

            if (pays.region == idContinent) {
              RegionSelect = pays;
              console.log(pays);
              return pays.translations.fra.common.toLocaleLowerCase().includes(ValueInput.toLocaleLowerCase());
            }
          }).map(function (pays) {
            return "\n\n    <div class=\"Container-Pays ".concat(DarkOrWhite ? "toggleBlack2" : "toggleBlack1", "\">\n  <img src=\"").concat(pays.flags.png, "\" alt=").concat("drapeau " + pays.name.common, " >\n\n     <div class = \"MarginLeft\">\n  <h2>").concat(pays.translations.fra.common.slice(0, 17), " </h2>\n  <h4> Population : ").concat(pays.population.toLocaleString("fr-FR"), "</h4>\n  <h4> Continent : ").concat(pays.region, "</h4>\n  <h4> Capital : ").concat(pays.capital, "</h4>\n   </div>\n     </div>");
          }).join(" ");

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

affichage();