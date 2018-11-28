//your code here
function board(input) {
    let output = []
    let angka = 1
    
    for (let i = input-1; i >= 0; i--) {
        let box = []
        if (input % 2 == 1) {

            if (i % 2 == 1) {
                for (let j = 0; j < input; j++) {
                    box[j] = angka
                    angka++
                }
            } else {
                for (let j = input-1; j >= 0; j--) {
                    box[j] = angka
                    angka++
                }
            }

        } else {

            if (i % 2 == 0) {
                for (let j = 0; j < input; j++) {
                    box[j] = angka
                    angka++
                }
            } else {        
                for (let j = input-1; j >= 0; j--) {
                    box[j] = angka
                    angka++
                }
            }
        }
        
        output[i] = box
    }

    return output
}

console.log(board(15));
// console.log(board(3));
