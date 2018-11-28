//your code here

function generateBoard(n) {
    let arrOutput = []

    for (let i = n; i > 0; i--) {
        let arrRow = []

        for (let j = 0; j < n ; j++) {
            if (i % 2 === 0) {
                arrRow.push(n*i - j)
            }   else{
                arrRow.push(n*(i-1) + (j+1))
            }
        }
        arrOutput.push(arrRow)
    }
    return arrOutput
}

console.log(generateBoard(8))