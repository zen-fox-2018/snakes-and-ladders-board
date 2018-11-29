function generateBoard(size) {
    let count = 1
    let board = []
    
    for (let i = size-1; i >= 0; i--) {
        let row = []
        for (let j = size-1; j >= 0; j--) {
            if (size % 2 === 0 && i % 2 === 0 || size % 2 !== 0 && i % 2 !== 0) {
                row[j] = count
            } else {
                row.push(count)
            }
            count++
        }
        board[i] = row
    }
    return board
}

console.log(generateBoard(10));
// console.log(generateBoard(11));
