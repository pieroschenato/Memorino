MEMORINO
Welcome to Memorino! This is a simple and interactive web-based game where players match pairs of plant-themed cards. It's a fun way to test your memory while discovering new plant species.

Objective
The objective of the game is to match all pairs of cards within 45 seconds. Players must click on two cards to reveal their images. If the images match, the cards remain face-up. If the images do not match, the cards flip back over.

Features
- Plant-themed card matching game.
- Interactive gameplay: players click cards to reveal images.
- JavaScript mechanism for comparing card images.
- Feedback provided on matches.
- Win condition: Match all pairs within 45 seconds.

To play Memorino, simply clone this repository to your local machine or download the ZIP file. Then, open the index.html file in your web browser.
git clone https://github.com/yourusername/memorino.git
cd memorino

ABOUT THE ROLE OF JAVASCRIPT
FUNCTIONS:
- switchPage(pageId)
Purpose: This function switches between different pages/screens in the game. It requires the ID of each page, and will iterate through all pages. If the display style property is set on "block", that means the page is currently visible, or else it will be set on "none".

- startGame()
Purpose: This function initializes the game. It will remove any existing interval, so you can properly begin the game. All flip classes are removed, as cards need to be in neutral position. It will shuffle the card order in a different order everytime the game starts.
It will set total time to 45 seconds and start the interval that runs at normal seconds speed. In the end, it will switch to the game screen.

- shuffleCards()
Purpose: This function shuffles the order of the cards by iterating through all of them and generate a random order. I achieved this using Math.random() paired with Math.floor() to round up numbers.

- flipCard()
Purpose: This function flips a card when clicked. flipcard() checks for locked board and the matching of the clicked card with the first card. It adds the flip class to the clicked card and we can see its image. I called the firsCard as the one clicked first, and secondCard as the clicked second,
so that the function must go through the checkForMatch() and inspect whether the firstCard and secondCard are identical. 

- checkForMatch()
Purpose: This function checks if two flipped cards match. I provided a data-matching attribute on the HTML file next to the card class. This will allow the function to properly recognize the card pair.
It must disable the pair if they are identical, but if they are not, it will unflip them and trigger a win or lose condition. 

- disableCards()
Purpose: This function disables matched cards. It will remove a click event listener connected to the cards flipped. 

- unflipCards()
Purpose: This function unflips cards that do not match. The lockboard is on 'true' because it must stop other clicks while those two cards are restored to their initial position.

- resetBoard()
Purpose: This function resets the game board after each turn. "hasFlippedCard" and "lockBoard" are on 'false' because neither is activated at this point. 

- updateTimer()
Purpose: This function updates the countdown timer every second. It decrements the "totalSeconds" by 1, calculates the remaining seconds and minutes, updating the current time left ("timeLeft")
When this timer reaches 0, it triggers the game end screen 

- addLeadingZero(num)
Purpose: This function adds a leading zero to single-digit numbers. It was necessary for those digits smaller than 10, which are not paramount but improve clarity. 
With these digits, it adds a zero in front of it, and formats the number as a string.
