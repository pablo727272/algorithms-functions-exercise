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
