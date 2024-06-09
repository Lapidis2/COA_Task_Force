
function reversingString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}


function stringToAscII(string) {
    let asciiStr = '';
    for (let i = 0; i < string.length; i++) {
        let asciiCode = '';
        let charCode = string.charCodeAt(i);

        while (charCode > 0) {
            asciiCode = String.fromCharCode(charCode % 10 + 48) + asciiCode;
            charCode = Math.floor(charCode / 10);
        }
        asciiStr += asciiCode + ' ';
    }
    return asciiStr.trim(); 
}


function transformString(string) {
  let transformedStr = "";

  console.log("Original string:", string);
  if (string.length % 15 === 0) {
    return (transformedStr = stringToAscII(string.split("").reverse().join("")));
     
  } else if (string.length % 3 === 0) {
    transformedStr = reversingString(string);
  } else if (string.length % 5 === 0) {
    transformedStr = stringToAscII(string);
  }
  else {
    return transformedStr = ""; 
  }

  console.log("Transformed string:", transformedStr);
  return transformedStr;
}
let testString = 'hello world';
console.log("Original string:", testString);
let transformedString = transformString(testString);
console.log("Transformed string:", transformedString);
module.exports = { reversingString, transformString,stringToAscII };
