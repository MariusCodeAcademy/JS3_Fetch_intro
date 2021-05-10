"use strict"; // here we go again

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

fetch("./data/cars.json")
  .then((resposnse) => {
    // primas zingsins gaunam atsakyma
    console.log("geras", resposnse);
    // ar nebuvo klaidu parsisiunciant duomenis (addrese)
    if (resposnse.ok === true) {
      console.log("atsakymas geras");
    }
    return resposnse.json();
  })
  .then((data) => {
    console.log(data);
  });
