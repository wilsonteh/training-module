import { insertBadge } from "./badge";
import { cardsData } from "./constant";
import "./style.css";

const imageGrid = document.getElementById('image-grid')!;
const sortDropdown = document.getElementById('sort-dropdown')! as HTMLSelectElement;

const insertCards = (sortValue: string = "ASC") => {
  // remove all card item from the DOM if there's any 
  imageGrid.innerHTML = "";
  sortCards(sortValue);

  cardsData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="img-wrapper">
        <img class="img" src="${data.imageSrc}" alt="">
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
  cardsData.sort((a, b) => sortValue === "ASC" ? a.collectorNo - b.collectorNo : b.collectorNo - a.collectorNo);  
}

insertCards();
insertBadge();
sortDropdown.addEventListener('change', () => insertCards(sortDropdown.value))

