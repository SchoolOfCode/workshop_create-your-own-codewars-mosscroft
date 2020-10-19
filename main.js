/* 
👉 Write your kata here!
It's National Sweet Day at School of Code, where Chris is kind enough to bring in a variety of sweets for the hard working bootcampers. Chris could bring in any number of sweets depending on how well we've done so far. For instance, he could bring in 5 of one type, 12 of another type, 36 of another type, etc. 

Write a function called sweetsFromChris to see if the sweets are divisible by the amount of bootcampers so that everyone gets an even amount of sugar! An array of sweet amounts will be provided. If the bootcampers get an even amount of sweets, a message should return 'Happy days!! Thanks Chris!'. If the amounts are uneven, return a message saying 'Aw man! That's not fair!'

let numberOfSweets =
function sweetFromChris() {
    
}

*/

//👉 Write the function your CodeWarriors will start with below here:

//write a function called sweetsFromChris
//separate the array from name and amount
//add the amounts in the array together
//divide this number by number of bootcampers
//if the number is evenly split, return 'Happy days!! Thanks Chris!'
//if the number isn't evenly split, return 'Aw man! That's not fair!'


//let array = ['Haribo: 50', 'Lollipops: 120', 'Skittles: 302', 'Jelly Babies: 95']
let sweets = [46, 46, 46, 46]
let bootcampers = 46; 

//function sweetsFromChris(total, number) {
  //  return total + number;

   let numberOfSweets = sweets.reduce(function (acc, val) {
        return acc + val;
    },0)

    function sweetsFromChris(){
        if (numberOfSweets % bootcampers === 0) {
        console.log('Happy days!! Thanks Chris!');
    } else {
        console.log("Aw man! That's not fair!");
    }
}