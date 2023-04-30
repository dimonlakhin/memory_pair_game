"use strict";

const biscuitsCards = [
  {
    name: "biscuit_1",
    image: "./img/biscuit_1.png",
  },
  {
    name: "biscuit_2",
    image: "./img/biscuit_2.png",
  },
  {
    name: "biscuit_3",
    image: "./img/biscuit_3.png",
  },
  {
    name: "biscuit_4",
    image: "./img/biscuit_4.png",
  },
  {
    name: "biscuit_5",
    image: "./img/biscuit_5.png",
  },
  {
    name: "biscuit_6",
    image: "./img/biscuit_6.png",
  },
];
const arrCompare = [];
const arrSumCards = [];
const imgFront = "./img/front_img.png";
const dablCards = [...biscuitsCards, ...biscuitsCards];
const randomCards = dablCards.sort(function () {
  return 0.5 - Math.random();
});

const gameContainer = document.querySelector(".game_container");

let cardsString = "";

for (let i = 0; i < randomCards.length; i++) {
  cardsString += `<div class="cards_item ${randomCards[i].name}"}>
            <img class="front_img" src="${imgFront}">
            <img class="back_img" src="${randomCards[i].image}">
        </div>
        `;
}
gameContainer.innerHTML = cardsString;

gameContainer.addEventListener("click", clickElement);

function clickElement({ target }) {
  if (target.classList.contains("front_img") && arrCompare.length < 2) {
    target.parentElement.classList.add("click_item");
    arrCompare.push(target.parentElement);

    if (arrCompare.length == 2) {
      const [firstElement, secondElement] = arrCompare;
      const firstCardId = firstElement.classList[1];
      const secondCardId = secondElement.classList[1];

      if (firstCardId == secondCardId) {
        setTimeout(() => {
          firstElement.classList.add("none");
          secondElement.classList.add("none");
          arrSumCards.push(firstElement);
          if (arrSumCards.length == 6) {
            finishGameAndReset();
          }
          arrCompare.length = 0;
        }, 600);
      }

      if (firstCardId !== secondCardId) {
        setTimeout(() => {
          firstElement.classList.remove("click_item");
          secondElement.classList.remove("click_item");
          arrCompare.length = 0;
        }, 600);
      }
    }
  }
}

const finishGameAndReset = () => {
  setTimeout(() => {
    alert("Вы прошли игру!!!");
    location.reload();
  }, 700);
};
