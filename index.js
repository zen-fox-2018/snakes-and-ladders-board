//your code here
function snakesAndLadders(board) {
    let result = []
    let num = board*board
    if(board % 2 === 0) {
        for(let i = 0; i < board; i++) {
            let inner = []
            for(let j = 0; j < board; j++) {
                inner.push(num)
                num--
            }
            if(i % 2 === 1) {
                result.push(reverse(inner))
            } else {
                result.push(inner)
            }
        }
    } else {
        for(let i = 0; i < board; i++) {
            let inner = []
            for(let j = 0; j < board; j++) {
                inner.push(num)
                num--
            }
            if(i % 2 === 0) {
                result.push(reverse(inner))
            } else {
                result.push(inner)
            }
        }
    }
    
    return result
}

function reverse (input) {
    let result = []
    for(let i = input.length-1; i >= 0; i--) {
        result.push(input[i])
    }
    return result
}

console.log(snakesAndLadders(10))
console.log(snakesAndLadders(15))
console.log(snakesAndLadders(8))