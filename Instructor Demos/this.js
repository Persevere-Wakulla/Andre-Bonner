const userInput = document.getElementById('user-input');
const submit = document.getElementById('submit');
const list = document.getElementById('list');

// How can I make it where I can insert the users Input into our list's html
submit.addEventListener('click', handleClick);

// Handle Click function
function handleClick() {
  // create task
  const li = document.createElement('li');
  // read the user's input
  li.textContent = userInput.value;
  // put it onto our page
  //   because we are adding a click handler to each li, we can track with this
  li.addEventListener('click', handleList);
  list.append(li);
  userInput.value = '';
}

function handleList() {
  // THIS only works in a function or obj method
  // show the items of the property
  console.dir(this);

  //   this.style.background = 'red';

  //   this.innerText = 'Completed';
  // you would want do some other stuff so you can keep track of which item has been completed or not
  this.style.textDecoration = 'line-through';
  this.remove();

  // find the current index of the item
  //   arr.indexOf()
}
