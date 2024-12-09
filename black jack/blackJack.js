
const player = document.querySelector('.player-hand')
const cardDeck = document.getElementById('deck');
const deal = document.getElementById('deal')
const myFirstCard = document.getElementById('my1stcard');
const mySecondCard = document.getElementById('my2ndcard');
const myHitCards = document.getElementById('hit-me')
const hitCard = document.getElementById('hit')
const computerFirstCard = document.getElementById('com1stcard');
const computerSecondCard = document.getElementById('com2ndcard');
const stayBtn = document.getElementById('stay')
const computer = document.getElementById('computer-hand');
const playAgain = document.getElementById('play-again')
// const PlayingBoard =
const deckOfCards = [
  {
    suit: 'hearts',
    value: 2,
    src: './assets/images/SVG-cards-1.3/2_of_hearts.svg'
  },
  {
    suit: 'hearts',
    value: 3,
    src: './assets/images/SVG-cards-1.3/3_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 4,
    src: './assets/images/SVG-cards-1.3/4_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 5,
    src: './assets/images/SVG-cards-1.3/5_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 6,
    src: './assets/images/SVG-cards-1.3/6_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 7,
    src: './assets/images/SVG-cards-1.3/7_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 8,
    src: './assets/images/SVG-cards-1.3/8_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 9,
    src: './assets/images/SVG-cards-1.3/9_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 10,
    src: './assets/images/SVG-cards-1.3/10_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 'J',
    src: './assets/images/SVG-cards-1.3/jack_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 'Q',
    src: './assets/images/SVG-cards-1.3/queen_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 'K',
    src: './assets/images/SVG-cards-1.3/king_of_hearts.svg'

  },
  {
    suit: 'hearts',
    value: 'Ace',
    src: './assets/images/SVG-cards-1.3/ace_of_hearts.svg'

  },
  {
    suit: 'diamonds',
    value: 2,
    src: './assets/images/SVG-cards-1.3/2_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 3,
    src: './assets/images/SVG-cards-1.3/3_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 4,
    src: './assets/images/SVG-cards-1.3/4_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 5,
    src: './assets/images/SVG-cards-1.3/5_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 6,
    src: './assets/images/SVG-cards-1.3/6_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 7,
    src: './assets/images/SVG-cards-1.3/7_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 8,
    src: './assets/images/SVG-cards-1.3/8_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 9,
    src: './assets/images/SVG-cards-1.3/9_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 10,
    src: './assets/images/SVG-cards-1.3/10_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 'J',
    src: './assets/images/SVG-cards-1.3/jack_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 'Q',
    src: './assets/images/SVG-cards-1.3/queen_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 'K',
    src: './assets/images/SVG-cards-1.3/king_of_diamonds.svg'

  },
  {
    suit: 'diamonds',
    value: 'Ace',
    src: './assets/images/SVG-cards-1.3/ace_of_diamonds.svg'

  },
  {
    suit: 'clubs',
    value: 2,
    src: './assets/images/SVG-cards-1.3/2_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 3,
    src: './assets/images/SVG-cards-1.3/3_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 4,
    src: './assets/images/SVG-cards-1.3/4_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 5,
    src: './assets/images/SVG-cards-1.3/5_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 6,
    src: './assets/images/SVG-cards-1.3/6_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 7,
    src: './assets/images/SVG-cards-1.3/7_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 8,
    src: './assets/images/SVG-cards-1.3/8_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 9,
    src: './assets/images/SVG-cards-1.3/9_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 10,
    src: './assets/images/SVG-cards-1.3/10_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 'J',
    src: './assets/images/SVG-cards-1.3/jack_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 'Q',
    src: './assets/images/SVG-cards-1.3/queen_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 'K',
    src: './assets/images/SVG-cards-1.3/king_of_clubs.svg'

  },
  {
    suit: 'clubs',
    value: 'Ace',
    src: './assets/images/SVG-cards-1.3/ace_of_clubs.svg'

  },
  {
    suit: 'spades',
    value: 2,
    src: './assets/images/SVG-cards-1.3/2_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 3,
    src: './assets/images/SVG-cards-1.3/3_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 4,
    src: './assets/images/SVG-cards-1.3/4_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 5,
    src: './assets/images/SVG-cards-1.3/5_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 6,
    src: './assets/images/SVG-cards-1.3/6_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 7,
    src: './assets/images/SVG-cards-1.3/7_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 8,
    src: './assets/images/SVG-cards-1.3/8_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 9,
    src: './assets/images/SVG-cards-1.3/9_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 10,
    src: './assets/images/SVG-cards-1.3/10_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 'J',
    src: './assets/images/SVG-cards-1.3/jack_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 'Q',
    src: './assets/images/SVG-cards-1.3/queen_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 'K',
    src: './assets/images/SVG-cards-1.3/king_of_spades.svg'

  },
  {
    suit: 'spades',
    value: 'Ace',
    src: './assets/images/SVG-cards-1.3/ace_of_spades.svg'
  },
];

const faces = ['J', 'Q', 'K']

function countScore(arr) {
  let score = arr.reduce((total, current) => total + current.value, 0)
  return score
}

function faceValue(arr) {
  let aces = 0
  arr.map((card) => {
    if (faces.includes(card.value)) {
      card.value = 10
    }
    if (card.value === 'Ace') {
      card.value = 11
      aces++
    }
    if (aces > 1) {
      arr[1].value = 1
    }
  })

}

//change ace
function changeAce(arr) {
  arr.map((card) => {
    if (card.value === 11 && countScore(arr) > 21) {
      card.value = 1
    }
  })
}

function replaceCards(arr) {
  while (arr.length) {
    deckOfCards.push(arr.pop())
  }
}

// hands
let playerHand = [];
let houseHand = [];

function changeAces(cards) {
  return (cards.value >= 11)
}

let aces = [];
aces = deckOfCards.filter(changeAces);


function generateStatusText(msg) {
  document.getElementById('winning-status').style.visibility = 'visible';
  document.getElementById('winning-status').textContent = msg;
}

deal.addEventListener('click', dealer)

function dealer() {
  let csc = deckOfCards.shift();
  houseHand.push(csc);
  let cfc = deckOfCards.shift();
  houseHand.push(cfc);
  let mfc = deckOfCards.shift();
  playerHand.push(mfc);
  let msc = deckOfCards.shift();
  playerHand.push(msc);
  faceValue(playerHand)
  changeAce(playerHand)
  changeAce(houseHand)
  faceValue(houseHand)
  countScore(playerHand)
  countScore(houseHand)
  computerFirstCard.src = cfc.src;
  countScore(houseHand)
  computerSecondCard.src = csc.src;
  countScore(houseHand)
  myFirstCard.src = mfc.src;
  countScore(playerHand)
  mySecondCard.src = msc.src;
  countScore(playerHand)

  if (countScore(playerHand) === 21) {
    generateStatusText('!! Black Jack Player Wins $$$ !!!');
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  } else if (countScore(houseHand) === 21) {
    generateStatusText('!! Black Jack The House Wins !!!');
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  } else if (countScore(playerHand) === 21 && countScore(houseHand) === 21) {
    generateStatusText('!! Black Jack The House Wins !!!');
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  } else {
    stayBtn.style.display = 'block';
    myHitCards.style.display = 'block'
    deal.style.display = 'none'
  }
};

myHitCards.addEventListener('click', hitMe)
function hitMe() {
  let card = deckOfCards.shift();
  playerHand.push(card);
  let hitCard = document.createElement('img')
  hitCard.src = card.src;
  hitCard.classList.add('cards');
  hitCard.classList.add('hit');
  player.append(hitCard);
  faceValue(playerHand)
  changeAce(playerHand)
  countScore(playerHand)

  if (countScore(playerHand) > 21) {
    generateStatusText('!! Player Busted !!');
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  }
};


stayBtn.addEventListener('click', stay)
function stay() {
  while (countScore(houseHand) < 17) {
    let card = deckOfCards.shift();
    houseHand.push(card);
    let hitCard = document.createElement('img')
    hitCard.src = card.src;
    hitCard.classList.add('cards');
    hitCard.classList.add('hit');
    computer.append(hitCard);
    faceValue(houseHand)
    changeAce(houseHand)
    countScore(houseHand)
  }
  winner()
  giveCount()
}

function giveCount() {
  // console.dir(playerCount);
  // console.dir(computerCount);
  console.dir(deckOfCards)
  console.dir(playerHand)
  console.dir(houseHand)
  console.dir(countScore(playerHand))
  console.dir(countScore(houseHand))
  // console.dir(computerCount)
  // winner()
}


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
// shuffle deck
shuffleArray(deckOfCards)

const winner = () => {
  if (countScore(houseHand) > 21) {
    generateStatusText('!! Player Wins $$!!')
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  } else if (countScore(playerHand) > countScore(houseHand) && countScore(playerHand) <= 21) {
    generateStatusText(' !! Player Wins $$!!');
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  } else if (countScore(houseHand) > countScore(playerHand) && countScore(playerHand) <= 21) {
    generateStatusText('!! The House Wins !!');
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  } else {
    generateStatusText('The House Wins')
    stayBtn.style.display = 'none';
    deal.style.display = 'none';
    myHitCards.style.display = 'none';
    playAgain.style.display = 'block'
  }
};

function replaceCards(arr) {
  while (arr.length) {
    deckOfCards.push(arr.pop())
  }
}


playAgain.addEventListener('click', function (e) {
  let array = Array.from(player.children);
  let arr = Array.from(computer.children);
  array.forEach(kid => {
    if (kid.classList.contains('hit')) {
      player.removeChild(kid);
    }
  });
  arr.forEach(kid => {
    if (kid.classList.contains('hit')) {
      computer.removeChild(kid);
    }
  });

  myFirstCard.src = '';
  mySecondCard.src = '';
  computerFirstCard.src = '';
  computerSecondCard.src = '';
  document.getElementById('winning-status').textContent = '';
  playerCount = 0;
  computerCount = 0;
  playAgain.style.display = 'none';
  deal.style.display = 'block'
  replaceCards(playerHand)
  replaceCards(houseHand)
  shuffleArray(deckOfCards)
  giveCount()

})

console.log()

