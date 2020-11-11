const hexArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const length = hexArray.length;
const container = document.querySelector('.container');
const Btn = document.querySelector('.button');

// console.log(hexArray.length);

//the hash letter before each hex color code
let letter = "#";

var index;

Btn.addEventListener('click', function(){
    
    //loop thru the array 5 times ( < 6)
    for(i = 0; i < 6; i++){
        index = Math.floor(Math.random()*length); //generate the values off the array randomly
        // console.log("Rand: " + Math.random());
        // console.log("Rand times lenght: " + Math.random()*length);
        // console.log("Index: " + index);
        letter += hexArray[index]; //add the 'hash' to the randomly generated elements off the array to produce a hex code 
    }

    container.style.backgroundColor = letter;// add the hex color to the HTML
    // console.log(letter);

    letter = '#'; //after first process, on the consequent click, process restarts
})