function generateBoard(size) {
    let count = 1
    let board = []
    
    for (let i = size-1; i >= 0; i--) {
        let row = []
        for (let j = size-1; j >= 0; j--) {
            if (size % 2 === 0) {
                if (i % 2 === 0) {
                    row[j] = count
                    count++
                } else {
                    row.push(count)
                    count++
                }
            } else {
                if (i % 2 === 0) {
                    row.push(count)
                    count++
                } else {
                    row[j] = count
                    count++
                }
            }
        }
        board[i] = row
    }
    return board
}

console.log(generateBoard(10));
console.log(generateBoard(11));
