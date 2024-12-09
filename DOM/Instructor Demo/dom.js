// querySelector
// grabs matches what is being put into it
const h1 = document.querySelector('h1');

// querySelector wont grab ids that start with numbers
// const h1Id = document.querySelector('#123');
// console.log(h1Id);

// console.log(input);

// getElementById will grab ids that start numbers
const h1Again = document.getElementById('123');
console.log(h1Again);

console.log(h1);

const listItems = document.querySelectorAll('.list-item');
// nodeLists and arrays are different
console.log(listItems);
for (let i = 0; i < listItems.length; i++) {
  // textContent
  console.log(listItems[i].textContent);
  listItems[i].textContent = `This is item ${i + 1}`;
}

const grabClass = document.getElementsByClassName('list-item');
console.log(grabClass);

const grabElements = document.getElementsByTagName('li');
console.log(grabElements);

// creating elements
const div = document.createElement('div');
div.id = 'created-div';
div.textContent = "I'm Alive!";
// appending (put it somewhere)
const body = document.body;
body.append(div);

// have user input info into the input
const input = document.querySelector("input[type='text']");
// when the user clicks the submit button
//? add a click eventListener
const buttonEle = document.querySelector('#submit');
const messageBoardEle = document.querySelector('#message-board');
buttonEle.addEventListener('click', handleClick);
function handleClick() {
  // grab the text of the input, input.value
  // I want to create a p with the message the user inputted
  const p = document.createElement('p');
  p.class = 'user-text';
  // what is the textContent of this p?
  p.textContent = input.value;
  // put it (append) into our desire element
  //   element.append(createdElement);
  messageBoardEle.append(p);
  // reset our input
  input.value = '';

  //!   thing to avoid!
  //   messageBoardEle.innerHTML = input.value;
}

const anotherP = document.createElement('p');
const pAgain = document.createElement('p');
pAgain.textContent = 'Not again';
anotherP.textContent = 1234;
messageBoardEle.append(anotherP, pAgain);
