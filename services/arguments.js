/*
|--------------------------------------------------------------------------
| Arguments Service
|--------------------------------------------------------------------------
|
| The Arguments Service should handle all the functions regarding
| to validation.
|
*/

const pruebaFile = require("./files")
const {join} = require('path')

// Set the number of files required to be sent in parameters
const FILESREQUIRED = 2

/** 
 * Define validation rules for the arguments provided by command line
 * 
 * @param array args 
 * @return 
 */
function validate(args) {
    // Check if two arguments have been provided
    if (!required(args.length)) throw new Error('Error: Expecting 2 files.')

    // Check existance of destinations file
    destinationsFile = join(__dirname, '..', 'files', args[2])
    pruebaFile.checkFile(destinationsFile)

    // Check existance of drivers_name file
    destinationsFile = join(__dirname, '..', 'files', args[3])
    pruebaFile.checkFile(destinationsFile)
}

/**
 * Check if two arguments have been provided
 * 
 * @param {int} argsLength 
 * @return boolean
 */
function required(argsLength) {
    // Default 2, because process.argv first two values always correspond to NodeJs's route and to the file that is executing the script
    return (argsLength != (2 + FILESREQUIRED)) 
        ? false
        : true 
}

module.exports = { validate };