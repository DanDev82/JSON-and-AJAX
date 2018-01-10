let myPets = [
  {
    "name": "Meowith",
    "species": "Cat",
    "food": "Tuna"
  },
  {
    "name": "Barketh",
    "species": "Dog",
    "food": "Chicken"
  },
  {
    "name": "Chucky",
    "species": "Rabbit",
    "food": "Salad"
  }
]

let animalInfo = document.querySelector('#animal-info');
animalInfo.innerHTML = `
  <div class="row my-5 text-center">
    <div class="col col-sm-12 col-md-4">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${myPets[0].name}</h5>
          <p class="card-text">Species: ${myPets[0].species}</p>
          <p class="card-text">Favorite Food: ${myPets[0].food}</p>
        </div>
      </div>
    </div>
    <div class="col col-sm-12 col-md-4">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${myPets[1].name}</h5>
          <p class="card-text">Species: ${myPets[1].species}</p>
          <p class="card-text">Favorite Food: ${myPets[1].food}</p>
        </div>
      </div>
    </div>
    <div class="col col-sm-12 col-md-4">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${myPets[2].name}</h5>
          <p class="card-text">Species: ${myPets[2].species}</p>
          <p class="card-text">Favorite Food: ${myPets[2].food}</p>
        </div>
      </div>
    </div>
  </div>
`;
