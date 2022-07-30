// Checking for Uniqueness
function includesString (input) {
  let truthines = true
  let str = ""
  for (let char of input) {
    str = input.slice(0, input.indexOf(char)) + input.slice(input.indexOf(char) + char.length)
	if (str.indexOf(char) === -1) {
	}
  else {
    return truthines = false
  }
	
}
  return truthines;
}