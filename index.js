//your code here
function generateBoard(num) {
    let arr = []
    let arrTemp = []
    let counter = 0

    for (let i = 0; i < num; i++) {
        let counter2 = 0
        for (let j = 0; j < num; j++) {
            counter++
            if (i % 2 == 0) {
                arrTemp.push(counter)
            } else if (i % 2 == 1) {
                // arrTemp.push((counter*2)-2)
                arrTemp[num-counter2-1] = counter

            }
            counter2++
        }
        // counter2 = 0
        arr[num - i - 1] = arrTemp
        arrTemp = []
    }
    return arr
}

console.log(generateBoard(8));
