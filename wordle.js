var gameHeight = 4; //number of guesses
    var gameWidth = 4; //length of the word

    var row = 0; //current guess (attempt #)
    var col = 0; //current letter for that attempt

    var gameOver = false;

    var Word = "";

    window.onload = function() {
        initialize();
    };

   async function initialize() {


        const darkModeToggle = document.getElementById("dark-mode-toggle");
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            console.log("darl");
        });

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
       
        for (let j = 0; j < gameWidth; j++) {
            let col = document.createElement("div");
            col.classList.add("column");
            for (let i = 0; i < gameHeight; i++) {
                let square = document.createElement("span");
                square.id = i.toString() + "-" + j.toString();
                square.classList.add("square");
                square.innerText = "";
                col.appendChild(square);
            }
            document.getElementById("board").appendChild(col);
        }
        

        
        //   const response = await fetch("https://api.masoudkf.com/v1/wordle", {
        //     headers: {
        //       "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
        //     },
        //   });
         


        //need to fix code, sometimes the code doesn't run with this

        //   let wordDict = await response.json();
        //   var{dictionary} = wordDict;
        //   randomWord = dictionary[Number.parseInt(Math.random() * dictionary.length )];
        //   Word = randomWord.word.toUpperCase();
        //   hintword = randomWord.hint;
        //   console.log(Word);


        //   const questionIcon = document.getElementById("question");
          
        //   questionIcon.addEventListener("click", function(){
        //     alert(hintword);
        //     console.log(hintword);
        //   });
       




        // Listen for Key Press
        document.addEventListener("keyup", (e) => {
            // if (gameOver) return;

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
                    alert("Please fill out the entire row before submitting.");
                }



            }

            if (!gameOver && row == gameHeight) {
                gameOver = true;
                document.getElementById("answer").innerText = Word;
            }

          
            
        });


    }

        function update() {
            let correct = 0;
            for (let column = 0; column < gameWidth; column++) {
                let currsquare = document.getElementById(row.toString() + '-' + column.toString());
                let letter = currsquare.innerText;
        
                // } // Is it in the word?
                if (letter == Word[column]) {
                    currsquare.classList.add("correct");
                    correct += 1;
                }
                
                else if (Word.includes(letter)) {
                    currsquare.classList.add("present");
                } // Not in the word
                else {
                    currsquare.classList.add("absent");
                }
            }
            
            if (correct == gameWidth) {
                gameOver = true;
                document.getElementById("congrats").style.display = "block";
        
            }
            const actualWordMessage = `The actual word is ${Word}`;

            if (!gameOver && row == gameHeight - 1) {
                gameOver = true;
                document.getElementById("answer").innerText = actualWordMessage;
            }
        }

        const startOverButton = document.getElementById("start-over");
        startOverButton.addEventListener("click", () => {
            localStorage.removeItem('word'); // Remove the stored word from localStorage

          location.reload();
        });
        
        