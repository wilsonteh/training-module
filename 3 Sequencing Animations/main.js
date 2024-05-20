const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// alice1.animate(aliceTumbling, aliceTiming);
// method 1: callback
function animateAlice(image, callback) {
  image.animate(aliceTumbling, aliceTiming).onfinish = callback;
}
// animateAlice(alice1, () => {
//   animateAlice(alice2, () => {
//     animateAlice(alice3)
//   })
// })

// method 2: promise chain 
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);
  

// method 3: async await 
(async () => {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
})();
