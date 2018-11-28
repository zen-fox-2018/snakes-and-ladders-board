function generateBoard(size) {
    //your code here

    let result = [];
    let counter = 1;

    if (size % 2 === 0) {
        for (let i = size; i > 0; i--) {
            let board = []
            if (i % 2 === 0) {
                for (let j = 0; j < size; j++) {
                    board[j] = counter
                    counter++
                }
            } else {
                for (let j = size; j > 0; j--) {
                    board[j - 1] = counter
                    counter++
                }
            }
            result[i - 1] = board
        }
    } else {
        for (let i = size; i > 0; i--) {
            let board = []
            if (i % 2 === 1) {
                for (let j = 0; j < size; j++) {
                    board[j] = counter
                    counter++
                }
            } else {
                for (let j = size; j > 0; j--) {
                    board[j - 1] = counter
                    counter++
                }
            }
            result[i - 1] = board
        }
    }
    console.log('')

    return result

}

console.log(generateBoard(15));
console.log(generateBoard(8));