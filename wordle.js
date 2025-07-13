// var gameHeight = 4; //number of guesses
//     var gameWidth = 4; //length of the word

//     var row = 0; //current guess (attempt #)
//     var col = 0; //current letter for that attempt

//     var gameOver = false;

//     var Word = "";

//     window.onload = function() {
//         initialize();
//     };

//    async function initialize() {


//         const darkModeToggle = document.getElementById("dark-mode-toggle");
//         darkModeToggle.addEventListener("click", () => {
//             document.body.classList.toggle("dark");
//             console.log("dark mode activated ");
//         });

//         const instructionsToggle = document.getElementById("info");
//         const instructionsContainer = document.getElementById("instructions-container");

//         // Hide the instructions by default
//         instructionsContainer.style.display = "none";

//         // Show or hide the instructions when the button is clicked
//         instructionsToggle.addEventListener("click", () => {
//             if (instructionsContainer.style.display === "none") {
//                 instructionsContainer.style.display = "block";
//             } else {
//                 instructionsContainer.style.display = "none";
//             }
//         });



//         // Create the game board
       
//         for (let j = 0; j < gameWidth; j++) {
//             let col = document.createElement("div");
//             col.classList.add("column");
//             for (let i = 0; i < gameHeight; i++) {
//                 let square = document.createElement("span");
//                 square.id = i.toString() + "-" + j.toString();
//                 square.classList.add("square");
//                 square.innerText = "";
//                 col.appendChild(square);
//             }
//             document.getElementById("board").appendChild(col);
//         }
        

        
//         //   const response = await fetch("https://api.masoudkf.com/v1/wordle", {
//         //     headers: {
//         //       "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
//         //     },
//         //   });
         


//         //need to fix code, sometimes the code doesn't run with this

//         //   let wordDict = await response.json();
//         //   var{dictionary} = wordDict;
//         //   randomWord = dictionary[Number.parseInt(Math.random() * dictionary.length )];
//         //   Word = randomWord.word.toUpperCase();
//         //   hintword = randomWord.hint;
//         //   console.log(Word);


//         //   const questionIcon = document.getElementById("question");
          
//         //   questionIcon.addEventListener("click", function(){
//         //     alert(hintword);
//         //     console.log(hintword);
//         //   });
       

//         try {
//             // Replace the API call with a hardcoded list of words
//             let dictionary = ["word", "good", "hell", "tomo", "como"]; // Add your words here
//             let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
//             Word = randomWord.toUpperCase();
//             console.log(Word);
    
//             const questionIcon = document.getElementById("question");
            
//             questionIcon.addEventListener("click", function(){
//                 alert("Hint: This is a hint for the word."); // Replace this with your hint
//                 console.log("Hint: This is a hint for the word."); // Replace this with your hint
//             });
//         } catch (error) {
//             console.log('Error:', error);
//         }



//         // Listen for Key Press
//         document.addEventListener("keyup", (e) => {
//             // if (gameOver) return;

//             if ("KeyA" <= e.code && e.code <= "KeyZ") {
//                 if (col < gameWidth) {
//                     let currsquare = document.getElementById(row.toString() + '-' + col.toString());
//                     currsquare.innerText = e.code[3];
//                     col++;
//                 }
//             } else if (e.code == "Backspace") {
//                 if (col > 0) {
//                     col--;
//                     let currsquare = document.getElementById(row.toString() + '-' + col.toString());
//                     currsquare.innerText = "";
//                 }
//             } else if (e.code == "Enter") {
//                  let filledOut = true;
//                 for (let i = 0; i < gameWidth; i++) {
//                     let square = document.getElementById(row.toString() + '-' + i.toString());
//                     if (square.innerText == "") {
//                         filledOut = false;
//                         break;
//                     }
//                 }
//                 if (filledOut) {
//                     update();
//                     row += 1; // start new row
//                     col = 0; // reset current index to 0 for new row
//                 } else {
//                     alert("Please fill out the entire row before submitting.");
//                 }



//             }

//             if (!gameOver && row == gameHeight) {
//                 gameOver = true;
//                 document.getElementById("answer").innerText = Word;
//             }

          
            
//         });


//     }

//         function update() {
//             let correct = 0;
//             for (let column = 0; column < gameWidth; column++) {
//                 let currsquare = document.getElementById(row.toString() + '-' + column.toString());
//                 let letter = currsquare.innerText;
        
//                 // } // Is it in the word?
//                 if (letter == Word[column]) {
//                     currsquare.classList.add("correct");
//                     correct += 1;
//                 }
                
//                 else if (Word.includes(letter)) {
//                     currsquare.classList.add("present");
//                 } // Not in the word
//                 else {
//                     currsquare.classList.add("absent");
//                 }
//             }
            
//             if (correct == gameWidth) {
//                 gameOver = true;
//                 document.getElementById("congrats").style.display = "block";
        
//             }
//             const actualWordMessage = `The actual word is ${Word}`;

//             if (!gameOver && row == gameHeight - 1) {
//                 gameOver = true;
//                 document.getElementById("answer").innerText = actualWordMessage;
//             }
//         }

//         const startOverButton = document.getElementById("start-over");
//         startOverButton.addEventListener("click", () => {
//             localStorage.removeItem('word'); // Remove the stored word from localStorage

//           location.reload();
//         });
        
        
var gameHeight = 4; // number of guesses
var gameWidth = 4; // length of the word
var row = 0; // current guess (attempt #)
var col = 0; // current letter for that attempt
var gameOver = false;
var Word = "";

window.onload = function() {
    initialize();
};

async function initialize() {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const moonIcon = darkModeToggle.querySelector("i");
    
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        moonIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
        console.log("Dark mode:", isDark ? "activated" : "deactivated");
    });

    // Instructions toggle functionality
    const instructionsToggle = document.getElementById("info");
    const instructionsContainer = document.getElementById("instructions-container");

    // Hide the instructions by default
    instructionsContainer.style.display = "none";

    // Show or hide the instructions when the button is clicked
    instructionsToggle.addEventListener("click", () => {
        if (instructionsContainer.style.display === "none") {
            instructionsContainer.style.display = "block";
        } else {
            instructionsContainer.style.display = "none";
        }
    });

    // Create the game board
    for (let i = 0; i < gameHeight; i++) {
        for (let j = 0; j < gameWidth; j++) {
            let square = document.createElement("div");
            square.id = i.toString() + "-" + j.toString();
            square.classList.add("square");
            square.innerText = "";
            document.getElementById("board").appendChild(square);
        }
    }

    try {
        // Word dictionary with hints
        let dictionary = ["WORD", "GOOD", "HELL", "PLAY", "GAME", "CODE", "NICE", "COOL", "FAST", "SLOW"];
        let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        Word = randomWord.toUpperCase();
        console.log("Word:", Word);

        // Hint system
        const questionIcon = document.getElementById("question");
        
        const hints = {
            "WORD": "A unit of language",
            "GOOD": "Opposite of bad",
            "HELL": "A place of punishment",
            "PLAY": "Have fun or engage in activity",
            "GAME": "A form of entertainment",
            "CODE": "Instructions for computers",
            "NICE": "Pleasant or agreeable",
            "COOL": "Low temperature or awesome",
            "FAST": "Moving quickly",
            "SLOW": "Moving at low speed"
        };
        
        questionIcon.addEventListener("click", function(){
            const hint = hints[Word] || "No hint available";
            alert(`Hint: ${hint}`);
        });
    } catch (error) {
        console.log('Error:', error);
    }

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < gameWidth) {
                let currsquare = document.getElementById(row.toString() + '-' + col.toString());
                currsquare.innerText = e.code[3];
                col++;
            }
        } else if (e.code == "Backspace") {
            if (col > 0) {
                col--;
                let currsquare = document.getElementById(row.toString() + '-' + col.toString());
                currsquare.innerText = "";
            }
        } else if (e.code == "Enter") {
            let filledOut = true;
            for (let i = 0; i < gameWidth; i++) {
                let square = document.getElementById(row.toString() + '-' + i.toString());
                if (square.innerText == "") {
                    filledOut = false;
                    break;
                }
            }
            if (filledOut) {
                update();
                row += 1; // start new row
                col = 0; // reset current index to 0 for new row
            } else {
                showPopup("Please fill out the entire row before submitting.");
            }
        }

        if (!gameOver && row == gameHeight) {
            gameOver = true;
            document.getElementById("answer").innerText = `The word was: ${Word}`;
        }
    });
}

function update() {
    let correct = 0;
    for (let column = 0; column < gameWidth; column++) {
        let currsquare = document.getElementById(row.toString() + '-' + column.toString());
        let letter = currsquare.innerText;

        // Check if letter is in correct position
        if (letter == Word[column]) {
            currsquare.classList.add("correct");
            correct += 1;
        }
        // Check if letter is in word but wrong position
        else if (Word.includes(letter)) {
            currsquare.classList.add("present");
        }
        // Letter not in word
        else {
            currsquare.classList.add("absent");
        }
    }
    
    // Check if player won
    if (correct == gameWidth) {
        gameOver = true;
        document.getElementById("congrats").style.display = "block";
        showPopup("Congratulations! You won!");
    }

    // Check if game is over (last row)
    if (!gameOver && row == gameHeight - 1) {
        gameOver = true;
        document.getElementById("answer").innerText = `The word was: ${Word}`;
        showPopup("Game Over! Better luck next time!");
    }
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.innerText = message;
    popup.classList.remove("hidden");
    
    // Auto-hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3000);
}

// Start over button functionality
const startOverButton = document.getElementById("start-over");
startOverButton.addEventListener("click", () => {
    location.reload();
});