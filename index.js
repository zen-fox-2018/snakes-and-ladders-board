
function generateBoard(num = 10) {
    let hasil = []

    for (let i = num - 1; i >= 0; i--) {
        let hasilDalam = []
        if (i % 2 === 0) {
            for (let j = 0; j < num; j++) {
                var angka = (j + 1 + i * num)
                hasilDalam.push(angka)

            }
            hasil.push(hasilDalam)
        }
        else {
            for (let j = num - 1; j >= 0; j--) {
                var angka = (j + 1 + i * num)
                hasilDalam.push(angka)

            }
            hasil.push(hasilDalam)
        }

    }
    return hasil
}

console.log(generateBoard())
console.log(generateBoard(15))
console.log(generateBoard(8))