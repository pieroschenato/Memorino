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

var interval;

function startGame() {
    clearInterval(interval)
    cards.forEach(card => {
        card.classList.remove("flip")
    })
    shuffleCards();
    resetBoard();
    totalSeconds = 45;
    interval = setInterval(updateTimer, 1000);
    switchPage('game-screen')
}

const startGameBtn = document.getElementById("start-game-btn");
startGameBtn.addEventListener('click', () => startGame());

const restartGameBtns = document.querySelectorAll(".restart-game-btn");

restartGameBtns.forEach( btn => {
    btn.addEventListener('click', () => startGame());
})

const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard = false; 
let firstCard, secondCard;
let totalSeconds = 45;
let pairsFlipped = 0;

function shuffleCards() {
    cards.forEach((card) => {
const randomNumber = Math.floor(Math.random() * 16);// mathfloor=rounds up to lowest
 card.style.order = randomNumber
    }) 
}

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
        pairsFlipped++;
        if(pairsFlipped === 8) {
            switchPage("game-end-win")
        }
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

function updateTimer() {
    totalSeconds--;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const timeLeft = `${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;

    countDown.textContent = timeLeft;

    if(totalSeconds === 0) {
        switchPage('game-end-lose')
    }
}

function addLeadingZero(num) {
    if (num >= 10) {
        return num
    }
    return '0' + num;
}

 