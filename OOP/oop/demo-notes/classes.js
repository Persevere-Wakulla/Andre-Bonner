// OOP intro
// FP using functions together to create larger product
// OOP using object and methods to create larger
// A collection of objects and methods we can use repeatly larger apps
//* Classes A way to create multiple objs
// create multiple same stuff

//? Objs are good way to handle state/changes in our app
//! how do we create objs the normal way
// example for creating a player for a game
// Player fight monster
// wep/att hp xp def speed
// let playerOneHp = 45;
// let playerOneAtt = 5;
// let playerOneXp = 0;
// let playerOneSpeed = 0;
// const playerOne = {
//   // Key: value - property: value
//   hp: 45,
//   att: 5,
//   xp: 0,
//   level: 1,
//   speed: 10,
//   // Methods- Functions attached to an obj
//   gainXp() {
//     this.xp += 5;
//     if (this.xp === 20) {
//       this.level++;
//     }
//   },
//   How can I change their stats based on their level?
// };
// console.log(playerOne)

// what if I wanted to create multiple objects with this same structure
// Classes!
// create the template
// hp,att,def,xp,level
class Player {
  // place of what will be inserted when argument are put in
  constructor(hp, att, xp, level, name) {
    // this.propertyName = value
    this.hp = hp;
    this.att = att;
    this.xp = xp;
    this.level = level;
    this.name = name;
  }
  //   Methods
  logLevel() {
    console.log(this.level);
  }

  levelUp() {
    if (this.level === 2) {
      this.superAttack = 50;
    }
  }

  attack(att, enemy) {
    // enemy obj
    return (enemy.hp -= att);
  }
}
//Keyword new
// extends
class Enemy extends Player {
  constructor(hp, att, level) {
    super();
    this.hp = hp;
    this.att = att;
    this.level = level;
  }
  evilLaugh() {
    console.log('You will never defeatme, MQUAHAHAHAHAHAHA');
  }
}
const playerOne = new Player(50, 200, 5000, 99, 'Billy');
console.log(playerOne.levelUp());
console.log(playerOne);
const playerTwo = new Player(1000000, -5, 2, 1, 'Johnanathan');
const enemyOne = new Enemy(20, 8, 2);
// shopping class/ product, menu, todo item
// console.log(playerOne.attack(playerOne.att, playerTwo));
// console.log(playerTwo);
console.log(enemyOne.evilLaugh());

// user
// admin extends user

const players = [
  [1, 2, 3, 4, 'john'],
  [4, 5, 6, 7, 'Bob'],
];
const test = players.map((player) => {
  // console.log(...player)
  return new Player(...player);
});
console.log(test);

//! Take away
// classes to create muliple objects that hold simliar values
// extend off those classes to create unique classes that share(inherit) prior properties

// some people/languages prefer FP only approach while others prefer OOP only approach
