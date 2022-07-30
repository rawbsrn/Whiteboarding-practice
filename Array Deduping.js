// Array Deduping

function arrayDedup (input) {
  let output = [];
  input.forEach(element => {
    if (output.includes(element))
    {}
    else
    output.push(element);
  });
  return output
}

function filterDedup (input) {
  let uniqueChars = input.filter((c, index) => {
    return input.indexOf(c) === index;
});
return uniqueChars;
}