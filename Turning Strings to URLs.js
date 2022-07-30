// Turning Strings to URLs
// get input string
// iterate over string
// check for spaces
// remove spaces from string
function spaceRemover (inputString) {
  let printArray= [];
  [...inputString].forEach(element => {
    if(element == " ") {
      element = "%20"
    }
    printArray.push(element);
  });
  
  return printArray.join("");
}

function recursionRemover (inputString) {
  if (!inputString) {
    return "";
  }
  element = inputString.slice(-1);
  if(element == " ") {
    element = "%20"
  }
  console.log(element)
  inputString = inputString.slice(0,-1);
  return recursionRemover(inputString)
}

