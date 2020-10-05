//define variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var lowerArray =lower.split("")
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperArray= upper.split("")
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var specialArray= special.split("");
var numbers= "0123456789";
var numberArray=numbers.split("")

console.log(lowerArray);
console.log(upperArray);
console.log(specialArray);
console.log(numberArray);


//function to generate a random password

function askForOptions() {
    var confirmLength = parseInt(prompt("how long would you like your passwor to be? Please choose between 8 to 128!"));
    console.log(confirmLength)
// if number chosen is below 8 characters or above 128 characters or not a number
    if (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        alert("please choose valid number");
        return;
    }
    //ask for char type

    var isLower = confirm("Would you like lower case letters?")
    var isUpper = confirm("Would you like Upper case letter?")
    var isSpecial= confirm("Would you like special characters?")
    var isNumber=confirm("Would you like numbers?")

    if (isLower === false && isUpper === false && isSpecial === false && isNumber === false ) {
        alert("please choose at least one character type");
        return;
    }
    var options = {
        confirmLength,
        isLower, isUpper, isSpecial, isNumber
    }
    return options
}

function generate() {
    var options = askForOptions();
    console.log(options)

    var superArray = [];
    var results = [];
    if(options.isLower) {
        superArray = superArray.concat(lowerArray)
    }
    if(options.isUpper) {
        superArray = superArray.concat(upperArray)
    }  
    if(options.isSpecial) {
        superArray = superArray.concat(specialArray)
    }
    if(options.isNumber) {
        superArray = superArray.concat(numberArray)
    }
//  for loop ofr pass password to repeat
    for(var i = 0; i < options.confirmLength; i++) {
        var index = Math.floor(Math.random() * superArray.length);
        var digit = superArray[index];
        results.push(digit);
        console.log(results)
    }

    var password = results.join("");
    console.log(password)

    var passDisplay = document.getElementById("password");
// producing the results on the page
    passDisplay.textContent = password;
}