// I want to write a message to all of my students but I am too lazy to hand to write the letters
// Array are lists
const students = [
  'ford',
  'bonner',
  'D lewis',
  'gordon',
  'fountain',
  'coon',
  'higgins',
  'formman',
  'mezler',
  'B lewis',
  'loveland',
  'lopez',
  'hurd',
  'flowers',
  'chamblin',
  'tollinchi',
  'roberts',
  'bolden',
  'chapman',
  'stern',
  'Doe',
  'campbell',
];
//  We want to return a random student from our array
// lets write out the pseudocode
// check how many students/items in your array
// Math.random()
//  arr[5] // 6 index of the array
function randomIndex(arr) {
  const totalItems = arr.length; // [1,2,3,4] 4  3
  const randomNumber = Math.floor(Math.random() * totalItems); // 0 - 21
  return arr[randomNumber];
}
// grabbing the element with the id test
const testElement = document.getElementById('test'); //html element
// event listeners!
// When I click on testElement, console.log('HEY! you clicked me, so rude!')
// no parentheses
// I want it to listen for the Click and if so do this!
testElement.addEventListener('click', handleClick);

function handleClick() {
  //   testElement.src =
  //     'https://static.vecteezy.com/system/resources/thumbnails/022/219/336/small/white-torn-paper-isolated-on-a-transparent-background-png.png';
  console.log('123');
}

document.getElementById('yo').addEventListener('click', function () {
  testElement.style.display = 'block';
});
// Switch different way to write multiple if statements
let letterGrade = '';
let grade = 90;
switch (grade) {
  case  90:
    letterGrade = 'A';
    console.log('A');
    break;
  case 80:
    letterGrade = 'B';
    console.log('B');
    break;
  default:
    letterGrade = 'F';
    console.log('F');
    break;
}
