var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// array of names
var nameList = ["mario","link","donkey kong","samus aran","kirby","zelda","captain falcon","luigi","fox mccloud","ganon", "wario", "peach", "bowser", "yoshi", "impa", "mother brain", "chrom", "ness"]
// random name generate
var name
// break down name into array of individual letters
var chars
// array of blanks equal to the length of chars
var blanks = []
// var of blanks array joined into one string to get rid of commas
var displayBlanks
// array of guessed letters
var guesses = []
// array of guessed letters thats not correct
var wrongGuesses = []
// var to store player input
var input
//  array of all the positions of the same letter
var indexes = []
// counter for tries left
var tries = 6
// counter for wins
var win = 0




function start(){
	// randomly select a word from nameList
	name = nameList[Math.floor(Math.random()*nameList.length)]
	// changes the string into an array where each letter is a seperate element
	chars = name.split('');
	// generate an array with the number of blanks equal to the length of the name
	for(i=0; i<chars.length; i++){
		blanks.push("_ ");
	}
	// replace "_" from spaces with " "
	if(chars.indexOf(" ") > 0){
		blanks.splice(chars.indexOf(" "),1,"  ");
	}
	// makes the array into a single string
	displayBlanks = blanks.join('');
	// displays the blanks
	document.getElementById("name").textContent = displayBlanks;
	// displays the number of tries
	document.getElementById("guesses_left").textContent = tries;
	// displays the wrong guesses
	document.getElementById("guessed_letters").textContent = wrongGuesses;
	// displays the wins
	document.getElementById("wins").textContent = win;
	// listen for user input
	document.onkeyup = function(event) {
		// checks if the user input is a letter in chars array and if the word is completed
		if(tries !== 0 && blanks.indexOf("_ ") !== -1){
			input = event.key;
			// if input matches an element in chars, does not match a letter in the guesses array, and is not " "
			if(input === chars[chars.indexOf(input)] && input !== guesses[guesses.indexOf(input)] && input !== " "){
				getAllIndexes(chars, input);
				// makes sure that if a letter occurs more than once in the word, it fills all of them
				for(i=0; i<indexes.length; i++){
					// replaces any "_ " in blanks with the correct letter
					blanks.splice(indexes[i],1,input);
				}
				// merge blanks into a single string
				displayBlanks = blanks.join('');
				// push the guessed letter into the guesses array
				guesses.push(input);
				// update the game on the page
				document.getElementById("name").textContent = displayBlanks;
			}
			// if same letter is inputed again
			else if(input === guesses[guesses.indexOf(input)]){
			    alert("you already tried that letter");
			}
			// if input does not match a letter in chars, does not match a letter in the guesses array, and is a letter not some other key
			else if (input !== chars[chars.indexOf(input)] && input !== guesses[guesses.indexOf(input)] && alpha.indexOf(input) !== -1) {
				// push the guessed letter into the guesses array
				guesses.push(input);
				// push the guessed letter into the wrongGuesses array
				wrongGuesses.push(input.toUpperCase());
				// decrease the amount of tries left
				tries--;
				// update the game page
				document.getElementById("guesses_left").textContent = tries;
				document.getElementById("guessed_letters").textContent = wrongGuesses;
			}
			// if user presses a key that is not a letter
			else if(input === " "){
				alert("Please choose a letter");
			}
			else{
				alert("Please choose a letter");
			}
		}
		// alert loss and reset game
		else if(tries === 0){
			alert("You Loss!");
			blanks = []
			guesses = [];
			wrongGuesses = [];
			tries = 6;
			start();
		}
		// alert win and add to the win counter
		else if(blanks.indexOf("_ ") === -1){
			alert("You Win!")
			win++
			blanks = []
			guesses = [];
			wrongGuesses = [];
			tries = 6;
			document.getElementById("wins").textContent = win;
			start();
		}
	}
}

// get all the indexes for repeating elements in an array
function getAllIndexes(arr, val) {
    indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
}

// start game once a key is pressed
document.onkeyup = function(){
	start();
}

