// https://javascript.info/async-await#tasks
//! New Way
const res = await fetch('https://api.scryfall.com/cards/search?q=fireball');
const data = await res.json();
const userInputEle = document.getElementById('userInput');
const submitButtonEle = document.querySelector('button');

const productsEle = document.querySelector('#products');

console.log(data);

display(data);


//! Old Way
// (async () => {
//   let response = await fetch(
//     'https://api.scryfall.com/cards/search?q=fireball'
//   );
//   let user = await response.json();
//   console.log(user)
// ? Rest of code inside this function

// })();






// different ways to fetch data
// !Async Await

// async function getData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   // We do our stuff
//   display(data);
// }

// https: submitButtonEle.addEventListener('click', () =>
//   getData(`https://api.scryfall.com/cards/search?q=${userInputEle.value}`)
// );

function display(data) {
  //   console.log(data);
  //   create an img of this magic card and price
  // forEach passing one card forEach card in card
  data.data.forEach((item) => createCard(item));
}

function createCard(card) {
  console.log(card);
  productsEle.innerHTML += `
         <img src=${card.image_uris.normal}>
         <h2>Price: ${card.prices.usd}</h2>
     `;
}

// try catch

// how to fetch data through inputs
// endpoints/queries

