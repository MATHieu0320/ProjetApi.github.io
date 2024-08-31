const changementDeBackground = document.querySelector("header nav span");
const InputSeatch = document.querySelector("input");
const form = document.querySelector("form");
const Resultat = document.getElementById("resultat");
// listes continent clique

const ListesContinent = document.querySelectorAll("Select-list ul");
console.log(ListesContinent);

// changementDeBackground

let DarkOrWhite = false;
let ClassDarkOrWhite = "toggleBlack";

async function ChangerLacouleur(params) {
  const toggleClass = document.querySelectorAll(".toggleBlack");
  const toggleClass1 = document.querySelectorAll(".toggleBlack1");
  affichage(continent);
  DarkOrWhite = !DarkOrWhite;
  console.log(DarkOrWhite);
  console.log(DarkOrWhite);

  toggleClass.forEach((all) => {
    all.classList.toggle("toggleBlack2");
  });
  toggleClass1.forEach((all2) => {
    all2.classList.toggle("toggleBlack3");
  });
}
changementDeBackground.addEventListener("click", ChangerLacouleur);

//////////////////////////////////////////////////////////

// clique continent
const select = document.querySelector(".Select");
const ul = document.querySelector("header form ul");
const li = document.querySelectorAll("header form ul li");
console.log(ul);
let continent = "Europe";
select.addEventListener("click", () => {
  ul.classList.toggle("display");
});

li.forEach((continent) => {
  // affichage("Asia");
  continent.addEventListener("click", (e) => {
    continent = e.target.id;
    continent = continent;
    console.log(continent);
    affichage(e.target.id);
  });
});

//////////////////////////////////////////////////////////
// API;
let result = [];
async function RecuperationApi() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((reponse) => {
      result = reponse;
      // console.log(result);
    });
}

// targetVALUE
let ValueInput = "d";

InputSeatch.addEventListener("input", (e) => {
  console.log(continent);
  ValueInput = e.target.value;
  affichage(continent);
  console.log(continent);
});

// form.addEventListener("submit", () => {
//   console.log("p");

//   affichage();
//   console.log();
// });

//////////////////////////////////////////////////////////
async function affichage(idContinent) {
  await RecuperationApi();
  continent = idContinent;

  Resultat.innerHTML = result
    .filter((pays) => {
      let RegionSelect;

      if (pays.region == idContinent) {
        RegionSelect = pays;
        // console.log(pays);

        return pays.translations.fra.common
          .toLocaleLowerCase()
          .includes(ValueInput.toLocaleLowerCase());
      }
    })

    .map(
      (pays) => `

    <div class="Container-Pays ${
      DarkOrWhite ? "toggleBlack2" : "toggleBlack1"
    }">
  <img src="${pays.flags.png}" alt=${"drapeau " + pays.name.common} >

     <div class = "MarginLeft toggleBlack">
  <h2 >${pays.translations.fra.common} </h2>
  <h4  > Population : <span class = "Pupulation">${pays.population.toLocaleString(
    "fr-FR"
  )} </span></h4>
  <h4> Continent :<span class = "Pupulation"> ${pays.region}</span></h4>
  <h4> Capital :<span class = "Pupulation"> ${pays.capital}</span></h4>
   </div>
     </div>`
    )
    .slice(0, 8)
    .join(" ");
}
affichage("Asia");
