let factor = 10

function sum (a,b){
    return a + b
}

function subtract (a,b){
    return a - b
}

function multiply (a,b){
    return a * b
}

function divide (a,b){
    return a / b
}
// bext couple are ... Revealing Mocule Patterns .... maybe data that is private to just this file
function multiplyByFactor(num){
    return num * factor
}

function setFactor(newFactor){
    factor = newFactor
}

//Can also have a contructor function 
function User (fName, lName){
    this.fName = fName
    this.lName = lName
}

//exporting using object literal (in ES6 as long as the name exists it will grab it)
module.exports= {
    sum,
    subtract,
    multiply,
    divide,
    multiplyByFactor,
    setFactor,
    User
}

//below works also
// module.exports = {
//     sum: sum,
//     subtract: subtract
// }
//************************************************************************************ */
//**************Below does same thing but shorter or more stream-lined *************** */

// module.exports.sum= function (a,b){
//     return a + b
// }
// module.exports.subtract= function (a,b){
//     return a - b
// }
