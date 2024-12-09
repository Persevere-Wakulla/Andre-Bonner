const students = [
  'Bonner',
  'Lewis',
  'Gordon',
  'Fountain',
  'Coon',
  'Higgins',
  'Formman',
  'Mezler',
  'Lewis',
  'Loveland',
  'Lopez',
  'Jeremy',
  'Flowers',
  'Chamblin',
  'Campbell',
  'Tollinchi',
  'Roberts',
  'Bolden',
  'Chapman',
];
// make sure we have an html element to append to
//HTML ELEMENT
const studentList = document.getElementById('students');
console.log(studentList);
//? Display all students onto my page
//1 LOOK through our students and find a way to SELECT their names
// counter; condition; increment/dec;
for (let i = 0; i < students.length; i++) {
  //Arr Bracket arrName[index]
  //   console.log(students[i], i); //grabbing the current student in our loop
  //2 Display
  //A Make some elements
  const li = document.createElement('li');
  //B give them textContent
  li.textContent = students[i];
  // *give them whatever else we want
  li.className = 'student';
  //C Put them on our page
  //append = containerEle.append(createdElem)
  studentList.append(li);
  // I want to be able to CLICK on any of the students
  li.addEventListener('click', removeItem);
}
function removeItem() {
  // GRAB the student I click on
  //   this = it refers to the current obj
  //in THIS example this is referring to a HTML element WHICH happens to have the textContent property that we want to grab the text of that element
  let currentStudent = this.textContent;
  //How can I grab the index of the current student I clicked on
  let currentIndex = students.indexOf(currentStudent);
  // I want the selected student to be removed from the array
  students.splice(currentIndex, 1);
  console.log(students);
  // & Student to be removed from the page
  this.remove();
}

// 40% Problem solve, 40% logical thinking, 20% little bit coding


function findIndex(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      console.log(i);
      return i;
    }
  }
}

findIndex(students, 'Formman');
