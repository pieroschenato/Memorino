const pages = document.querySelectorAll(".page");


// function to switch between pages:
function switchPage(pageId) {
 console.log('switching page ...')
 pages.forEach( page => {
    if(page.id === pageId) {
        page.style.display = 'block';
    }
    else {
        page.style.display = 'none';
    }
 })
}

const startGameBtn = document.getElementById("start-game-btn");
startGameBtn.addEventListener('click', () => switchPage('game-screen'));

const restartGameBtn = document.getElementById("restart-game-btn");
function restartGame() {
    totalSeconds = 45;
    const interval = setInterval(updateTimer, 1000);
    switchPage('game-screen');
}
restartGameBtn.addEventListener('click', () => restartGame());


const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard = false; //
let firstCard, secondCard;

(function shuffleCards() {
    cards.forEach((card) => {
const randomNumber = Math.floor(Math.random() * 16);// mathfloor=rounds up to lowest
 card.style.order = randomNumber
    }) 
})()



function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        lockBoard = true; // Prevent further clicks until cards are checked
        checkForMatch();
    }
}

function checkForMatch() {
    let isMatch = firstCard.dataset.matching === secondCard.dataset.matching;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true; // Prevent further clicks while cards are being flipped back

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1500);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;//empty
    secondCard = null;
}

cards.forEach((card) => card.addEventListener("click", function() {
        flipCard.call(this);//click card === flipcard functien called 
}));


const countDown = document.getElementById('timer');

let totalSeconds = 45;

const interval = setInterval(updateTimer,1000);


function updateTimer() {
    totalSeconds--;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const timeLeft = `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;

    countDown.textContent = timeLeft;

    if(totalSeconds === 0) {
        clearInterval(interval);
        switchPage('game-end')
    }
}

function addLeadingZero(num) {
    if (num >= 10) {
        return num
    }
    return '0' + num;
}

 