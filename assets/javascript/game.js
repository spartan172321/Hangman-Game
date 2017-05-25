var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// array of names
var nameList = ["mario","link","donkey kong","samus","kirby","zelda","captain falcon","luigi","fox mccloud","ganon"]
// random name generate
var name = nameList[Math.floor(Math.random()*10)]
// break down name into array of individual letters
var chars = name.split('')
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
// converts the chars array into an object with index as property and letter as value
var charPosition = {}
chars.forEach(function(letter,index){
	charPosition[index] = letter
});






function start(){
	// generate an array with the number of blanks equal to the length of the name
	for(i=0; i<chars.length; i++){
		blanks.push("_ ")
	}
	// replace "_" from spaces with " "
	if(chars.indexOf(" ") > 0){
		blanks.splice(chars.indexOf(" "),1,"  ")
	}
	// makes the array into a single string
	displayBlanks = blanks.join('')
	// displays the blanks
	document.getElementById("name").textContent = displayBlanks
}


// listen for user input
document.onkeyup = function(event) {
	input = event.key;
	if(tries !== 0){
		// checks if the user input is in a letter in chars
		// if input matches an element in chars and does not match a letter in the guesses array
		if(input === chars[chars.indexOf(input)] && input !== guesses[guesses.indexOf(input)] && input !== " "){
			
			getAllIndexes(chars, input);
			// replaces all "_" in blanks with the correct letter
			for(i=0; i<indexes.length; i++){
				blanks.splice(indexes[i],1,input);
			}
			// merge blanks into a single string
			displayBlanks = blanks.join('')
			// push the guessed letter into the guesses array
			guesses.push(input);
			// update the game on the page
			document.getElementById("name").textContent = displayBlanks
		}
		// if input is repeated
		else if(input === guesses[guesses.indexOf(input)]){
		    alert("you already tried that letter")
		}
		// if input does not match an element in chars and does not match a letter in the guesses array
		else if (input !== chars[chars.indexOf(input)] && input !== guesses[guesses.indexOf(input)] && alpha.indexOf(input) !== -1) {
			guesses.push(input);
			wrongGuesses.push(input);
			tries--;
			document.getElementById("guesses_left").textContent = tries
			document.getElementById("guessed_letters").textContent = wrongGuesses
		}
		else if(input === " "){
			alert("Please choose a letter");
		}
		else{
			alert("Please choose a letter");
		}
	}
	else if(tries === 0){
		alert("you loss!");
	}
	
}

// get all the indexes for repeating elements in an array
function getAllIndexes(arr, val) {
    indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
}


start()