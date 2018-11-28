//your code here
function generateboard(input) {
    let num = input*input
    let result = []
    for (let i = input ; i > 0 ; i--) {
        let arr = []
        let count = input -1
        for (j = 0; j < input ; j++) {
            if (i% 2 === 0) {
                arr.push(num)
            } else {
                arr[count] = num
                count--
            }
            num--
        }
        result.push(arr)
    }

    return result
}

console.log(generateboard(15))
console.log(generateboard(4))