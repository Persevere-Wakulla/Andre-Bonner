
const secretNumber = Math.floor(Math.random() * 3) + 1;
let money = 20;
console.log(secretNumber);
const userInput = prompt('Pick a number between 0-5');

console.log(userInput);
if (userInput == secretNumber) {
  console.log(
    `Dang You took all my coffee How will I ever stay up all night ${
      money + 20
    }`
  );
} else if (userInput < secretNumber) {
  console.log(`You lost 5 Bags of coffee ${money - 5}`);
} else {
  console.log('Pick a lower Number');
  console.log(`You lost 5 Bags of coffee ${money - 5}`);
}
