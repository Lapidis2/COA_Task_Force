// lets creat function to reverse an input string
function reversingString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

// function to convert a string to ASCII codes
function stringToAscII(str) {
    let asciiStr = '';
    for (let i = 0; i < str.length; i++) {
        let asciiCode = '';
        let charCode = str.charCodeAt(i);

        while (charCode > 0) {
            asciiCode = String.fromCharCode(charCode % 10 + 48) + asciiCode;
            charCode = Math.floor(charCode / 10);
        }
        asciiStr += asciiCode + ' ';
    }
    return asciiStr.trim(); // Remove trailing space
}

// Function to transform a string based on certain rules
function transformString(inputStr) {
    let transformedStr = '';

    // Check if the length of the string is divisible by 15
    if (inputStr.length % 15 === 0) {
        transformedStr = reversingString(inputStr);
        transformedStr = stringToAscII(transformedStr);
    }
    // Check if the length of the string is divisible by 3
    else if (inputStr.length % 3 === 0) {
        transformedStr = reversingString(inputStr);
    }
    // Check if the length of the string is divisible by 5
    else if (inputStr.length % 5 === 0) {
        transformedStr = stringToAscII(inputStr);
    }

    return transformedStr;
}

// Test the functionality
let testString = 'hello world';
console.log("Original string:", testString);
let transformedString = transformString(testString);
console.log("Transformed string:", transformedString);

// Exporting functions
module.exports = { reversingString, transformString,stringToAscII };
