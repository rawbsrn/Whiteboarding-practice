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