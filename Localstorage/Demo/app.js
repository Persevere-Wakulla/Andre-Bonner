// ! Simple Todo List with Local Storage

// User should be able to write a todo
// and when he/she presses ENTER
// store the todo and display it
// when clear list is pressed
// remove data

// Steps?
//? Grab inputs?
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const ul = document.querySelector('ul');

// let todoList = [];

// // when my page loads console.log(localStorage)
// window.addEventListener('load', () => {
//   const localStorageList = JSON.parse(localStorage.getItem('list'));
//   //   Check if there is any local storage
//   if (!localStorageList) { //This is only triggers when localstorage doesnt exist
//     return;
//   }

// //   iterating through our localStorage and running our display function forEach item
//   localStorageList.forEach((item) => {
//     displayItems(item);
//   });

// });

// input.addEventListener('keypress', handleKeyPress);

// function handleKeyPress(e) {
//   // Destructing the properties we are using
//   const userInput = input.value;
//   const { key } = e;
//   if (key === 'Enter') {
//     // do stuff with our input
//     // JSON.stringify
//     // JSON.parse
//     todoList.push(input.value);
//     displayItems(userInput);
//     localStorage.setItem('list', JSON.stringify(todoList));
//     input.value = '';
//     // display our input
//   }
// }

// function displayItems(item) {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ul.append(li);
// }

// button.addEventListener('click', () => {
//     // Reseting everything
//   todoList = [];
//   ul.replaceChildren(todoList);
//   localStorage.clear();
// });

const input = document.querySelector('input');
const ul = document.querySelector('ul');

// Ternary Operator: 1 line if statement
const todoList = localStorage.length ? JSON.parse(localStorage.getItem('list')) : [];

window.onload = () => {
  loadList(todoList);
};

input.addEventListener('keypress', handleKeyPress);

function loadList(list) {
  const ul = document.querySelector('ul');
  list.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo;
    ul.append(li);
  });
}

function handleKeyPress(e) {
  if (e.key === 'Enter') {
    addToList(input.value);
    displayList(todoList);
    input.value = '';
  }
}

function addToList(todoItem) {
  todoList.push(todoItem);
  localStorage.setItem('list', JSON.stringify(todoList));
  return todoList;
}

function displayList(list) {
  const li = document.createElement('li');
  li.textContent = list[list.length - 1];
  ul.append(li);
}

document.querySelector('button').addEventListener('click', () => {
  localStorage.clear();
  ul.textContent = '';
});
