import { insertBadge } from "./badge";
import { cardsData } from "./constant";
import "./style.css";

const imageGrid = document.getElementById('image-grid')!;
const sortDropdown = document.getElementById('sort-dropdown')! as HTMLSelectElement;

// TODO default sort order 

const insertCards = (sortValue: string = "ASC") => {
  // remove all card item from the DOM if there's any 
  while (imageGrid.firstChild) {
    imageGrid.removeChild(imageGrid.firstChild);
  }
  sortCards(sortValue);

  cardsData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="img-wrapper">
        <img class="img" src="https://data.cardsandhobbies.com/images/1778cf9a-2703-41e9-86d7-ec21af8cf61d/card.jpg" alt="">
      </div>
      <div class="info">
        <div class="sm-text">
          <span class="set"> ${data.set} </span> |
          <span class="collector-no"> ${data.collectorNo.toString().padStart(3, '0')} </span>
        </div>
        <div class="title">${data.title}</div>
        <p class="description">${data.description}</p>
      </div>    
    `;
    imageGrid.appendChild(card)
  })
};

const sortCards = (sortValue: string) => {
  if (sortValue === "ASC") {
    cardsData.sort((a, b) => a.collectorNo - b.collectorNo);  
  } else if (sortValue === "DESC") {
    cardsData.sort((a, b) => b.collectorNo - a.collectorNo);  
  }
}

insertCards();
insertBadge();
sortDropdown.addEventListener('change', () => insertCards(sortDropdown.value))

