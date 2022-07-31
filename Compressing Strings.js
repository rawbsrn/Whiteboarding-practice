// compressing strings


function compressedString(input){
  let compressedString = ""
  let inputArray = input.split("")
  for (let i = 0; i < inputArray.length; i++){
    let count = 1
    let currentLetter = inputArray[i]
    while (i < inputArray.length - 1 && inputArray[i] === inputArray[i + 1]){
      count++
      i++
    }
    if (count === 1){
      compressedString += currentLetter
    } else {
      compressedString += currentLetter + count
    }
  }
  return compressedString
}

function compressRecurse(string){
  if (string.length === 0) //endcase is when the string index is 0
  return string; // return the string 
  let count =1; // the count starts at one 
  for (let i = 0; string[i] === string[i+1]; i++) count++; // start at index 0 checks to see if the string index is equll to the string index +1 if it does go to the next index and add to the count
  if (count >1) {  //if statement to handle multiple occurences 
  return count.toString() + string[0] + compressRecurse(string.substring(count)); // return the string with the count of occurences and the index 
} else {
  return string[0] + compressRecurse(string.substring(1)); //cuts off index 1 of the string each time it runs
}
};