function generateBoard(number) {
    let board = [];
    let total = number * number;

    for(let i = 0; i < number; i++) {
        board.push([]);
        let count = number-1;
        for(let j = 0; j < number; j++) {
            if(i%2 === 0 && number%2 === 0 || i%2 === 1 && number%2 === 1) {
                board[i].push(total);
            } else {
                board[i][count] = total;
                count--;
            }
            total--;
        }
    }
    return board;
}
console.log(generateBoard(10));
console.log(generateBoard(5));