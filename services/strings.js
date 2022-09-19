/*
|--------------------------------------------------------------------------
| String Service
|--------------------------------------------------------------------------
|
| The String Service should handle the functions to count vowels and
| consonants in the driver's name.
|
*/

/**
 * Count number of vowels in a string 
 * 
 * @param {str} string 
 * @return {int} vowelsCount
 */
function countVowels(string) {
    return string.match(/[aeiou]/gi).length;
}


/**
 * Count number of consonants in a string 
 * 
 * @param {str} string 
 * @return {int} vowelsCount
 */
function countConsonants(string) {
    return string.match(/[bcdfghjklmnpqrstwxyz]/gi).length;
}

module.exports = {
                    countVowels,
                    countConsonants        
                }