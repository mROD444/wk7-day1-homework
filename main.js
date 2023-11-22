//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }
function findWords(str, names) {
    for (let i = 0; i < names.length; i++){
        let nameSelected = names[i];
        if (nameSelected)
            console.log(`Matched ${nameSelected}`);
        else {
            console.log('No match');
        }

    }
}



//Call method here with parameters
findWords(dog_string,dog_names)





//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, 'even index');
    }
    return arr;
}


let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let Output_arr = replaceEvens(Given_arr);

// function replaceEvens(arr){
//     //code goes here
// }
console.log('Given arr =', Given_arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]








//CODEWARS IN JS
// Multiply
// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     a * b
//   }
function multiply (a, b){
    return a * b;
}

let result = multiply (2,5);
console.log(result);

let result2 = multiply(3,10);
console.log(result2);

let result3 = multiply (9,0);
console.log(result3)




// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



function evenOrOdd(number) {
    if( number % 2 == 0){
        return 'even';
    } else {
        return 'odd';
    }
  
}

let number1 = evenOrOdd(2);
console.log(number1);

let number2 = evenOrOdd(7373773787777782);
console.log(number2);

let number3 = evenOrOdd(47477472111);
console.log(number3)

