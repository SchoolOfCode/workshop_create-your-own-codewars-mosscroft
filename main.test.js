//👉 Write your tests below here:
/*
Test Scripts - 
Test with an array of numbers that are divisible by 46
Test with an array of numbers that aren't divisible by 46
Test with and array of number containing numbers that contain decimal places

*/


const { sweetsFromChris } = require('./main')

test(`the sweetsForChris function returns yay sweets meesage when number total is divisible by number of bootcampers, example an array of 46s`), () => {
    const actual = sweetsFromChris([46, 46, 46, 46]);
    const expected = 'Happy days!! Thanks Chris!';
  
    expect(actual).toBe(expected);
  };


  test(`the sweetsForChris function returns arr man meesage when number total is NOT divisible by number of bootcampers, example an array of 5`), () => {
    const actual = sweetsFromChris([5, 5, 5, 5]);
    const expected = "Aw man! That's not fair!";
  
    expect(actual).toBe(expected);
  };

