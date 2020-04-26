"use strict";

document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'circle',
      img: 'images/card_circle.png'
    },
    {
      name: 'circle',
      img: 'images/card_circle.png'
    },
    {
      name: 'down_arrow',
      img: 'images/card_down_arrow.png'
    },
    {
      name: 'down_arrow',
      img: 'images/card_down_arrow.png'
    },
    {
      name: 'up_arrow',
      img: 'images/card_up_arrow.png'
    },
    {
      name: 'up_arrow',
      img: 'images/card_up_arrow.png'
    },
    {
      name: 'left_arrow',
      img: 'images/card_left_arrow.png'
    },
    {
      name: 'left_arrow',
      img: 'images/card_left_arrow.png'
    },
    {
      name: 'right_arrow',
      img: 'images/card_right_arrow.png'
    },
    {
      name: 'right_arrow',
      img: 'images/card_right_arrow.png'
    },
    {
      name: 'square',
      img: 'images/card_square.png'
    },
    {
      name: 'square',
      img: 'images/card_square.png'
    },
    {
      name: 'star',
      img: 'images/card_star.png'
    },
    {
      name: 'star',
      img: 'images/card_star.png'
    },
    {
      name: 'triangle',
      img: 'images/card_triangle.png'
    },
    {
      name: 'triangle',
      img: 'images/card_triangle.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const scoreDisplay = document.querySelector('#result');

  let score = 0;
  let cardsChosen = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    scoreDisplay.textContent = score;
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/card_back.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const cardOneId = cardsChosen[0];
    const cardOneName = cardArray[cardOneId].name;
    const cardTwoId = cardsChosen[1];
    const cardTwoName = cardArray[cardTwoId].name;

    if (cardsChosen[0] == cardsChosen[1]) {
      alert('Choose a different card');
      cards[cardOneId].setAttribute('src', 'images/card_back.png');
    } else if (cardOneName === cardTwoName) {
        alert('You found a match!');
        cards[cardOneId].setAttribute('src', 'images/blank.png');
        cards[cardOneId].removeEventListener('click', flipCard);
        cards[cardTwoId].setAttribute('src', 'images/blank.png');
        cards[cardTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        score += 10;
    } else {
      alert('Sorry not a match :(');
      cards[cardOneId].setAttribute('src', 'images/card_back.png');
      cards[cardTwoId].setAttribute('src', 'images/card_back.png');
    }

    cardsChosen = [];

    scoreDisplay.textContent = score;
    if (cardsWon.length == cardArray.length/2) {
      scoreDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  // Flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard();

})
