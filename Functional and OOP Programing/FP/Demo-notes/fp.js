// ! Functional Programming Paradigm
// create by using small function that perform single task
// getting and display = getData  display

//? 1 same input same output parameter?
function multipleNumbers(num1, num2) {
  return num1 * num2;
}

//? 2 declarative coding vs imperative
//* some experience how write the function that do what to do
//* describing more of the what to do more than the how

//? 3 immutable data = we don't want to change our data
//* (copying) spread arrays,objs
const names = ['jim', 'pam', 'sam', 'tam'];
const moreNames = ['Jack', 'Jill', 'Bill', 'Phil'];
const allNames = [...names,...moreNames]

function addItemToArray(arr, item) {
  return [...arr, item];
}
console.log(names);
const updatedArr = addItemToArray(names, 'ram');
console.log(updatedArr);
//*  destructuring
// Arrays
const [name1, name2 ,name3] = names
console.log(names[2])
console.log(name3)

// Objs
const month = {
    year: 2024,
    holidays: ['Memorial Day', 'Mothers Day'],
    days: 31,
    fav: false
}
console.log(month.holidays)
const {year, holidays, days, fav} = month
    console.log(year)
    console.log(days)
    // adding items
// month.birthdays = ['Bill','Sam']
// console.log(month)
const cloneObj = {...month, birthday: ["Bill", 'Sam'], even: false}
console.log(month)
console.log(cloneObj)
// * higher order functions over traditional for loop
    //returns new array

//? 4 pure functions
    function squareNum(number){
        return number * number
    }
    // creating small function
    //* limit the amount of side effects and outside state
//* It is possible to create functions with no side effects but don't stress about perfection


// Bootstrap 101

// FP approach is excellent when dealing with mathematical equations



// PCC
// https://javascript.info/destructuring-assignment


// TODO Project Ideas
// currency converter
// password generator
