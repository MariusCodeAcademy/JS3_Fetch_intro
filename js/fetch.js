"use strict"; // here we go again

const loadBtn = document.getElementById("load");

const person = {
  name: "John",
  lastName: "doe",
  age: 44,
  isMarried: false,
  hasCarr: null,
};

console.log(person);

// padarom is js objekto JSON tipo objekta(texta)
const personJson = JSON.stringify(person);

console.log(personJson);

const cars = [
  { make: "Audi", year: 2000 },
  {
    make: "BMW",
    year: 2010,
    extra: {
      brand: "blue",
      color: "green",
    },
  },
  { make: "VW", year: 2020 },
];

console.log("cars", JSON.stringify(cars));

// parsisiusti json duomenis

// fetch('is kur siusti')
// primas zingsins gaunam atsakym
fetch("./data/cars.json")
  .then((resposnse) => resposnse.json())
  .then((data) => {
    // cia mes jau turim duomenis ir galima su jais dirbti
    // data.push({ blue: "green" });
    console.log(data);
  })
  .catch((err) => console.warn(err));
// gaudom atsiradusias klaidas jei tokiu yra

function loadAbout() {
  // parsiusti puslapi is about.html
  fetch("./data/about.html")
    .then((resp) => resp.text())
    .then((data) => {
      document.getElementById("app").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

loadBtn.addEventListener("click", loadAbout);
