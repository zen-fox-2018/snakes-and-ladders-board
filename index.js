function generateBoard(size) {
  let array = []
  let count = size*size
  for (let i = 0; i < size; i++) {
    let unshift = size-1
    let innerArray = []
    for (let j = 0; j < size; j++) {
      if (size % 2 === 0) {
        if (i % 2 === 0) {
          innerArray.push(count)
          count--
        }
        else {
          innerArray[unshift] = count
          count--
          unshift--
        }
      }
      else {
        if (i % 2 !== 0) {
          innerArray.push(count)
          count--
        }
        else {
          innerArray[unshift] = count
          count--
          unshift--
        }
      }
    }
    array.push(innerArray)
  }
  return array
}

console.log(generateBoard(10));
