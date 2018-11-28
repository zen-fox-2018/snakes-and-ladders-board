//your code here
function generateBoard(size) {
  let myResult = []
  for (let i = size; i >= 1; i--) {
    let newColumn = [];
    let isiGenap = i * size;
    for (let j = 1; j <= size; j++) {
      if (i % 2 === 1) {
        newColumn.push((i - 1) * size + j);
      } else {
        newColumn.push(isiGenap);
        isiGenap--;
      }
    }
    myResult.push(newColumn);
  }
  return myResult;
}

console.log(generateBoard(15));
