const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */
const altTexts = ['Closeup of a human eye', '??', 'flowers', 'egypt wall art', 'butterfly']

/* Looping through images */
for (let i=0; i<images.length; i++) {
  console.log(i)
  const image = document.createElement('img');
  image.setAttribute('src', `images/${images[i]}`);
  image.setAttribute('alt', altTexts[i]);
  thumbBar.appendChild(image);
  image.addEventListener('click', e => {
    console.log(e.target.alt)
    displayedImage.setAttribute('src', e.target.src)
    displayedImage.setAttribute('alt', e.target.alt)
  })
}

btn.addEventListener('click', toggleImgDarken)


function toggleImgDarken() {
  if (btn.textContent === 'Darken') {
    overlay.style.backgroundColor = 'hsla(0,0%,0%,.5)';
    btn.textContent = 'Lighten'
  } else if (btn.textContent === 'Lighten') {
    overlay.style.backgroundColor = 'hsla(0,0%,0%,0)';
    btn.textContent = 'Darken'
  }
}





/* Wiring up the Darken/Lighten button */
