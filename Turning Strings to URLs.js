// Turning Strings to URLs
// get input string
// iterate over string
// check for spaces
// remove spaces from string
function spaceRemover (inputString) {
  printArray= [];
  [...inputString].forEach(element => {
    if(element == " ") {
      element = "%20"
    }
    printArray.push(element);
  });
  
  return printArray.join("");
}

