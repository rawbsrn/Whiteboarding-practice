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