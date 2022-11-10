//didn't add eventlistener like she did

const cards = [
  {
    name: "cheeseburger",
    image: "src/images/cheeseburger.png",
  },
  {
    name: "fries",
    image: "src/images/fries.png",
  },
  {
    name: "hotdog",
    image: "src/images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "src/images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "src/images/milkshake.png",
  },
  {
    name: "pizza",
    image: "src/images/pizza.png",
  },
  {
    name: "cheeseburger",
    image: "src/images/cheeseburger.png",
  },
  {
    name: "fries",
    image: "src/images/fries.png",
  },
  {
    name: "hotdog",
    image: "src/images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "src/images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "src/images/milkshake.png",
  },
  {
    name: "pizza",
    image: "src/images/pizza.png",
  },
];
console.log(cards);

const x = cards.length;

const xxy = Math.random(x) * x;
console.log(xxy);

const rand = Math.floor(xxy);

const result = cards[Math.floor(Math.random(cards.length) * x)];
console.log(result);

const totalrandom = cards.sort((a, b) => 0.5 - Math.random(x));
console.log(cards.sort((a, b) => 0.5 - Math.random(x)));
// We are creating elements and addind attribute properties to those images
const create = document.querySelector(".grid");
const score = document.querySelector("#total");
let cardsWithIds = [];
let cardsWithAll = [];
let cardsWon = [];
function gridGeneration() {
  for (i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "src/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", cardReval);

    create.appendChild(card);
  }

  function cardReval() {
    let cardWithDataId = this.getAttribute("data-id");
    this.setAttribute("src", cards[cardWithDataId].image);
    cardsWithIds.push(cardWithDataId);
    console.log(cardsWithIds);
    if (cardsWithIds.length === 2) {
      setTimeout(checkingForMatch, 300);
    }

    function checkingForMatch() {
      const cardsForMatching = document.querySelectorAll("img");
      const cardZero = cardsWithIds[0];
      const cardOne = cardsWithIds[1];
      console.log(cards[cardZero].name);
      if (cardsWithIds[0] === cardsWithIds[1]) {
        cardsForMatching[cardZero].setAttribute("src", "src/images/blank.png");
        // alert(`clicking the same tile `);
        cardsWithIds.splice(0, cardsWithIds.length);
      } else if (cards[cardZero].name === cards[cardOne].name) {
        // alert(`a match`);
        cardsForMatching[cardZero].setAttribute("src", "src/images/white.png");
        cardsForMatching[cardOne].setAttribute("src", "src/images/white.png");
        cardsForMatching[cardZero].removeEventListener("click", cardReval);
        cardsForMatching[cardOne].removeEventListener("click", cardReval);
        cardsWon.push(cardsWithIds);
        cardsWithIds.splice(0, cardsWithIds.length);
        console.log(cardsWon);
      } else {
        cardsForMatching[cardZero].setAttribute("src", "src/images/blank.png");
        cardsForMatching[cardOne].setAttribute("src", "src/images/blank.png");
        cardsWithIds.splice(0, cardsWithIds.length);
      }

      score.textContent = cardsWon.length;
      if (cardsWon.length === 6) {
        score.textContent = "You matched all tiles.Congratulations you won.";
      }
    }
  }
}

gridGeneration();
