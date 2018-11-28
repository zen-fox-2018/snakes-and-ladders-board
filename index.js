//your code here
function generateBoard(size) {
  let counter = 1
  let semiBoard = []
  for (let i = 0; i < size; i++) {
    let counterSaver = counter
    let innerCount = counterSaver + size - 1
    let tmpBoard = []
    for (let j = 0; j < size; j++) {
      debugger
      if (i % 2 === 1) {
        tmpBoard.push(innerCount)
        innerCount--
      }
      else {
        tmpBoard.push(counter)
      }
      counter++
    }
    semiBoard.push(tmpBoard)
  }
  let countBoard = semiBoard.length - 1
  let finalBoard = []
  for (let i = 0; i < semiBoard.length; i++) {
    finalBoard.push(semiBoard[countBoard])
    countBoard--  
  }
  return finalBoard
}


console.log(generateBoard(10))