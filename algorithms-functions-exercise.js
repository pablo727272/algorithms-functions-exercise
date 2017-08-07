console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 1. Write a function which takes an array of numbers and returns the mode of that array.
// // [2, 4, 4, 4, 6, 6, 1] - > 4
// // [0, 0, 0, 10] -> 0
// // [1] -> 1`);
// mode = most common number, or repeated most times
// this is Raphael's solution, shared in class...
var firstArray = [2,4,4,4,6,6,1]
var secondArray = [0,0,0,10]
var thirdArray = [1]

var findTheMode = function(numbers){
  var keepTrack = {}
  for (var i=0; i < numbers.length; i++) {
    if(!(numbers[i] in keepTrack)) {
      keepTrack[numbers[i]] = 1
    }
    else [
      keepTrack[numbers[i]]++
    ]
  }
  var biggestNum = 0
  var biggestKey = ''
  for (var key in keepTrack) {
    if (keepTrack[key] > biggestNum) {
      biggestNum = keepTrack[key]
      biggestKey = key
    }
  }
  return biggestKey
}
console.log(findTheMode(firstArray));
console.log(findTheMode(secondArray));
console.log(findTheMode(thirdArray));


console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 2. Write a function which, given a year as a number, returns whether that number is a leap year.
// //
// // 2000 -> true
// // 1900 -> false
// // 2016 -> true`);

// i used this link for ref:  https://support.microsoft.com/en-us/help/214019/method-to-determine-whether-a-year-is-a-leap-year

var leapYear = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {  // can be divided by 4 but can't be divided by 100
        return true;
    } else if (year % 4 === 0 && (year % 100 === 0 && year % 400 === 0)){  // can be divided by 4 and can be divided by 100 and also by 400
        return true;
    } else {
        return false;
    }
};
console.log(leapYear(2000));
console.log(leapYear(1900));
console.log(leapYear(2016));

console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// // [1,2,5] -> 3
// // [1,2,3,4,5] -> 6
// // [3,4,5] -> 1`);

var fourthArray = [1,2,5]
var fifthArray = [1,2,3,4,5]
var sixthArray = [3,4,5]

var firstMissingInt = function(numbers){
  for (var i=1; numbers.length; i++) { // loop over length of any incoming array
    if ( numbers.indexOf(i) === -1) {  // -1 means false when dealing with array indexes
      return i  // return the first instance of a value that is not in the input array (in this case, a number)
    }
  }
}
console.log(firstMissingInt(fourthArray));
console.log(firstMissingInt(fifthArray));
console.log(firstMissingInt(sixthArray));


console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// // [1,1,2,3,1,2,3] -> [1,2,3]
// // [1,4,4,4,2,2,4,4,4] -> [1,4,2]`);
//
var dupesRemoved = function(arr){
  var arrayWithUniquesPushedIntoIt = []  // empty container for results
  for (var i=0; i<arr.length; i++) {  // loop thru array
    if (arrayWithUniquesPushedIntoIt.indexOf(arr[i]) === -1) {  // if the empty array doesn't contain a value from the input array then..
      arrayWithUniquesPushedIntoIt.push(arr[i]); // push that value into the empty array...  loop again and recheck...  if it is already there, ignore, but if not, push it in...  reloop until no more matches found
    }
  }
  return arrayWithUniquesPushedIntoIt; // return the results
}
console.log(dupesRemoved([1,1,2,3,1,2,3]));
console.log(dupesRemoved([1,4,4,4,2,2,4,4,4]));


console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
// //
// // "The quick brown fox" -> "Hetay uickqay rownbay oxfay".
// //
// // (source: https://adriann.github.io/programming_problems.html)
// //`);

// convert str to array (splitArray)
// loop over length of splitArray
// for each item in the array, pop slice the last letter off and push into new array (slicedLetters)
// push sliced last letters into new array [] (slicedLetters)
//
// concatenate + 'ay'


function letters(word) {
    return word.split('')
}

function pigLatinizeWord(word) {
    var chars = letters(word);
    return chars.slice(1).join('') + chars[0] + 'ay';
}

function pigLatinizeSentence(sentence) {
    return sentence.replace(/\w+/g, pigLatinizeWord)
}

console.log(pigLatinizeSentence("The quick brown fox"));



console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// // [], [] -> true
// // [2, 3, 4], [1, 2, 3] -> false
// // ["a", "c", "b"], ["a", "b", "c"] -> true
// // [1, 1, 1], [1, 1, 1, 1] -> false
// //`);
var areEqual = function(arr1,arr2){
  if (arr1.length !== arr2.length) {  // make sure they are pairs
    return false;
  }
  var arr1Sorted = arr1.sort();  // sort the arrays
  var arr2Sorted = arr2.sort();
  console.log(arr1Sorted);
  console.log(arr2Sorted);
  for (let i=0; i < arr1Sorted.length; i++) { // since they're both equal, loop over length of the array
    if (arr1Sorted[i] === arr2Sorted[i]) { //
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(areEqual([], []));
console.log(areEqual([2, 3, 4], [1, 2, 3]));
console.log(areEqual(["a", "c", "b"], ["a", "b", "c"]));
console.log(areEqual([1, 1, 1], [1, 1, 1, 1]));


console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// // [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// // [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
// //`);

// loop through index...  find all numbers that are <= the input num
// if <= num, leave it in array, otherwise "set" to num
// for loop
// array assignment e.g. arr[i] = num
// if/else

var cutoff = function(arr,num){
  for (let i=0; i<arr.length; i++) {
    if (arr[i] <= num) {  // if where we are in loop is less than or matches the num input, keep looping
      continue;
    } else {
      arr[i] = num; // otherwise, replace where we are in loop with the num input
    }
  }
  return arr; // after the length of whatever array is input, return the "amended array"
}
console.log(cutoff([1,2,3,4,5,6,7,8], 4));
console.log(cutoff([1,5,7,3,1,5,7], 3));


console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.
// //
// // -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// // -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
// //`);
var random = function(){
  var arr = [];
  while (arr.length < 10) { // loop until arr.length is 10
    var randomNum = Math.floor(Math.random() * 100) + 1; // generate random number between 1 and 100
    if (!arr.includes(randomNum)) { // if the array doesn't include a *unique* random number (i.e. it is not the same as the previous iteration...
      arr.push(randomNum); // add a random number to the array, until the array contains 10 values...
    }
  }
  return arr;
}
console.log(random());



console.log(`=-=-=-=-=-=-=SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 9. Write a function which takes two sorted lists and merges them into a new sorted list.
// //
// // [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// // [], [] -> []
// // [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
// //
// // (Source: https://adriann.github.io/programming_problems.html)
// //`);

// array.sort(); //  will sort array by default from
// loop thru 1st, push into newArray
// loop thru 2nd, push into newArray
// sort newArray
// return newArray

// var arr = [2, -1, 0, 1, -2];
// console.log(arr.sort(function(a, b){return a - b}));  // this is used to sort numbers correctly!!

var merge = function(arr1,arr2){  // accepts two arrays
  var newArray = [];  // empty array to push into
  for (let i=0; i < arr1.length; i++) { // loop through array 1
    newArray.push(arr1[i]) } // push into the new array
  for (let i=0; i < arr2.length; i++) { // loop through array 2
    newArray.push(arr2[i]) } // push into the new array
  newArray.sort(function(a, b){return a - b}); // sort numbers using special math code
  return newArray;
}
console.log(merge([1,2,5,6,9], [3,4,5,10]));
console.log(merge([], []));
console.log(merge([-1, 0, 1], [-2, 2]));


console.log(`=-=-=-=-=-=-=***BONUS***NOT SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 10. Write a function which, given an array, determines the subarray with the largest sum.
// //
// // [1, 1, 1, -1] -> [1, 1, 1]
// // [1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
// // [2, 2, -10, 5, -10, 2, 2] -> [5]
// // [1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]
// //
// // (Source: http://venus.cs.qc.edu/~ryba/cs111/Array.pdf with edits, which may no longer be accessable)
// //`);


console.log(`=-=-=-=-=-=-=***BONUS***NOT SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 11. One way of encoding a message is called a "square code". Given a message like:
// //
// // "Have a nice day!"
// //
// // We determine an appropriate size of a square or rectangle to contain this message without spaces like so:
// //
// // have
// // anic
// // eday
// // !
// //
// // We then read the square in columns, which gives us our encoded message:
// //
// // hae! and via ecy
// //
// // Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.
// //
// // (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)
// //`);


console.log(`=-=-=-=-=-=-=***BONUS***NOT SOLVED BELOW-=-=-=-=-=-=-=-=`);
// console.log(`// 12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.
// //
// // Example output:
// // th 2.37%
// // in 2.20%
// // fj 2.00%
// // ...
// //
// //
// // (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)`);
