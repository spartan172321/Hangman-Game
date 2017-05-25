// array of names
var nameList = ["mario","link","donkey kong","samus","kirby","zelda","captain falcon","luigi","fox mccloud","ganon"]
// random name generate
//var name = nameList[Math.floor(Math.random()*10)]
var name = "captain falcon"
// break down name into array of letters
var chars = name.split('')
// array of blanks
var blanks = []
// var to display the blanks on the page
var displayBlanks
// array of guessed letters
var guesses = []
// var to store player input
var input
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
	if(input === chars[chars.indexOf(input)]){
		blanks.splice(chars.indexOf(input),1,input)
		displayBlanks = blanks.join('')
		document.getElementById("name").textContent = displayBlanks
	}
	
}

start()