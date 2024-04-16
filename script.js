function filterPlacesByType(typePreference) {
  let filteredPlaces = [];
  for (let place of PLACES) {
    if (place.type === typePreference) {
      filteredPlaces.push(place);
    }
  }
  
  return filteredPlaces;
}

function createCard(place) {
  let card = document.createElement("div");
  card.classList.add('col');
  card.innerHTML = `
    <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
      <img src="${place.img}" class="card-img-top h-100" alt="${place.name}">
      <div class="card-body">
        <h5 class="card-title">${place.name}</h5>
        <p class="card-text">${place.location}</p>
      </div>
    </div>
  `;
  return card;
}

function populateRecommendationCards(filteredPlaces) {
  let recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = "";
  for (let place of filteredPlaces) {
    let card = createCard(place);
    recommendations.appendChild(card);
  }

}

function findPlaceByName(placeName) {
  for (let place of PLACES) {
    if (place.name === placeName) {
      return place;
    }
  }
}
