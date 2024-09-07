"use strict";

var changementDeBackground = document.querySelector("header nav span");
var InputSeatch = document.querySelector("input");
var form = document.querySelector("form");
var Resultat = document.getElementById("resultat");
var resultatAuClick = document.getElementById("resultatAuClick"); // listes continent clique

var ListesContinent = document.querySelectorAll("Select-list ul");
console.log(ListesContinent); // changementDeBackground

var DarkOrWhite = false;
var ClassDarkOrWhite = "toggleBlack";

function ChangerLacouleur(params) {
  var toggleClass, toggleClass1;
  return regeneratorRuntime.async(function ChangerLacouleur$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          toggleClass = document.querySelectorAll(".toggleBlack");
          toggleClass1 = document.querySelectorAll(".toggleBlack1");
          affichage(continent);
          DarkOrWhite = !DarkOrWhite;
          console.log(DarkOrWhite);
          console.log(DarkOrWhite);
          toggleClass.forEach(function (all) {
            all.classList.toggle("toggleBlack2");
          });
          toggleClass1.forEach(function (all2) {
            all2.classList.toggle("toggleBlack3");
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

changementDeBackground.addEventListener("click", ChangerLacouleur); //////////////////////////////////////////////////////////
// clique continent

var select = document.querySelector(".Select");
var ul = document.querySelector("header form ul");
var li = document.querySelectorAll("header form ul li");
console.log(ul);
var continent = "Europe";
select.addEventListener("click", function () {
  ul.classList.toggle("display");
});
li.forEach(function (continent) {
  // affichage("Asia");
  continent.addEventListener("click", function (e) {
    continent = e.target.id;
    continent = continent;
    console.log(continent);
    affichage(e.target.id);
  });
}); //////////////////////////////////////////////////////////
// API;

var result = [];

function RecuperationApi() {
  return regeneratorRuntime.async(function RecuperationApi$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://restcountries.com/v3.1/all").then(function (res) {
            return res.json();
          }).then(function (reponse) {
            console.log(reponse);
            result = reponse; // console.log(result);
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
} // targetVALUE


var ValueInput = "d";
InputSeatch.addEventListener("input", function (e) {
  console.log(continent);
  ValueInput = e.target.value;
  affichage(continent);
  console.log(continent);
}); // form.addEventListener("submit", () => {
//   console.log("p");
//   affichage();
//   console.log();
// });
//////////////////////////////////////////////////////////

function affichage(idContinent) {
  var ContainerPays;
  return regeneratorRuntime.async(function affichage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(RecuperationApi());

        case 2:
          continent = idContinent;
          Resultat.innerHTML = result.filter(function (pays) {
            var RegionSelect;

            if (pays.region == idContinent) {
              RegionSelect = pays; // console.log(pays);

              return pays.translations.fra.common.toLocaleLowerCase().includes(ValueInput.toLocaleLowerCase());
            }
          }).map(function (pays) {
            return "\n\n    <div class=\"Container-Pays ".concat(DarkOrWhite ? "toggleBlack2" : "toggleBlack1", "\">\n  <img src=\"").concat(pays.flags.png, "\" alt=").concat(pays.translations.fra.common, " >\n\n     <div class = \"MarginLeft toggleBlack\">\n  <h2 >").concat(pays.translations.fra.common.slice(0, 22), " </h2>\n  <h4  > Population : <span class = \"Pupulation\">").concat(pays.population.toLocaleString("fr-FR"), " </span></h4>\n  <h4> Continent :<span class = \"Pupulation\"> ").concat(pays.region, "</span></h4>\n  <h4> Capital :<span class = \"Pupulation\"> ").concat(pays.capital, "</span></h4>\n   </div>\n     </div>");
          }).slice(0, 8).join(" ");
          ContainerPays = document.querySelectorAll(".Container-Pays");
          console.log(ContainerPays);
          ContainerPays.forEach(function (container) {
            container.addEventListener("click", function (e) {
              var ValeurAuClick = e.target.alt;
              InformationAuClick(ValeurAuClick);
            });
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}

affichage("Asia");

function InformationAuClick(nomDuPays) {
  var Langues = ["fra", "eng", "esp", "slv", "kor", "rus", "ESP"];
  resultatAuClick.innerHTML = result.filter(function (paysSelect) {
    if (nomDuPays == paysSelect.translations.fra.common) {
      return nomDuPays;
    } else {
      console.log("f");
    }
  }).map(function (pays) {
    return "\n      <span id= \"Back\">Back</span>\n<div class= \"Separation toggleBlack\" >\n<div class = \"Separation1 \">\n <img src=\"".concat(pays.flags.png, "\" alt=").concat(pays.translations.fra.common, " >\n </div>\n<div class = \"Separation2\">\n\n\n\n  <h1>").concat(pays.translations.fra.common, " </h1>\n<div class = \"Separation3  toggleBlack\">\n<div >\n\n  <h4> Population :<span class = \"Pupulation\"> ").concat(pays.population, "</span></h4>  \n  <h4> Region :<span class = \"Pupulation\"> ").concat(pays.region, "</span></h4>\n  <h4> subregion :<span class = \"Pupulation\"> ").concat(pays.subregion, "</span></h4>\n\n  <h4> Capital :<span class = \"Pupulation\"> ").concat(pays.capital, "</span></h4>\n\n  </div>\n  <div >\n  <h4> Top Level Domain:<span class = \"Pupulation\"> ").concat(pays.tld, "</span></h4>\n\n\n <h4> languages :<span class = \"Pupulation\"> ").concat(pays.languages, " </span></h4>\n  </div>\n</div>\n</div>\n</div>\n       </div>\n     </div>\n   ");
  });
}