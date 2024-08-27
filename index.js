const changementDeBackground = document.querySelector("header nav span");
const InputSeatch = document.querySelector("input");
const form = document.querySelector("form");

// listes continent clique

const ListesContinent = document.querySelectorAll("Select-list ul");
console.log(ListesContinent);

// changementDeBackground

let DarkOrWhite = false;
let ClassDarkOrWhite = "toggleBlack";

console.log(ClassDarkOrWhite);
changementDeBackground.addEventListener("click", () => {
  const toggleClass = document.querySelectorAll(".toggleBlack");
  const toggleClass1 = document.querySelectorAll(".toggleBlack1");
  // const ContainerPays = document.querySelector(".Container-Pays");
  affichage();
  DarkOrWhite = !DarkOrWhite;
  console.log(DarkOrWhite);

  toggleClass.forEach((all) => {
    all.classList.toggle("toggleBlack2");
  });
  toggleClass1.forEach((all2) => {
    all2.classList.toggle("toggleBlack3");
  });
});
//////////////////////////////////////////////////////////

// clique continent
const select = document.querySelector(".Select");
const ul = document.querySelector("header form ul");
console.log(ul);

select.addEventListener("click", () => {
  ul.classList.toggle("display");
});

//////////////////////////////////////////////////////////
// API;
let result = [];
async function RecuperationApi() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((reponse) => {
      result = reponse;
      console.log(result);
    });
}

// targetVALUE
let ValueInput = "";

InputSeatch.addEventListener("input", (e) => {
  ValueInput = e.target.value;
  affichage();
});

// form.addEventListener("submit", () => {
//   console.log("p");

//   affichage();
//   console.log();
// });

//////////////////////////////////////////////////////////
async function affichage() {
  await RecuperationApi();

  const Resultat = document.getElementById("resultat");

  setTimeout(() => {
    console.log(ValueInput, result[2].translations.fra.common);
  }, 2000);
  // let Pays = result.translations.fra.common;

  Resultat.innerHTML = result
    .filter((pays) => {
      if (DarkOrWhite == true) {
        ClassDarkOrWhite = "toggleBlack";
      } else if (DarkOrWhite == false) {
        ClassDarkOrWhite = "toggleBlack1";
      }
      console.log(ClassDarkOrWhite);

      return pays.translations.fra.common
        .toLocaleLowerCase()
        .includes(ValueInput.toLocaleLowerCase());
    })
    .map(
      (pays) => `

    <div class="Container-Pays ${
      DarkOrWhite ? "toggleBlack2" : "toggleBlack1"
    }">
  <img src="${pays.flags.png}" alt=${"drapeau " + pays.name.common} >

     <div class = "MarginLeft">
  <h2>${pays.translations.fra.common.slice(0, 17)} </h2>
  <h4> Population : ${pays.population.toLocaleString("fr-FR")}</h4>
  <h4> Continent : ${pays.region}</h4>
  <h4> Capital : ${pays.capital}</h4>
   </div>
     </div>`
    )
    .join(" ");
}
affichage();
