function generateBoard (num) {
  let result = []
  let bil = 1
  for (let i = 0; i < num; i++) {
    let temp = []
    for (let j = 0; j < num; j++) {
      if (i % 2 == 0) {
        temp.push(bil)
        bil++
      } else {
        temp.unshift(bil)
        bil++
      }
    } 
    result.unshift(temp)   
  }
  return result
}

// console.log(generateBoard(8))

//g pake unshift
function generate(num) {
  let result = []
  let bil = num * num

  for (let i = 1; i <= num; i++) {
    let temp = []
    let index = num - 1
    for (let j = 0; j < num; j++) {
      
      if (i % 2 !== 0) {
        temp.push(bil)
      } else {
        temp[index] = bil
        index--
      }
      bil--
    }
    result.push(temp)
  }
  return result
}
console.log(generate(8))

// if (i % 2 == 0 && i !== 0 ) {
//   bil = result[i-1][0]
//   bil-- 
// } else {
//   bil = result[i-1][num-1] - num
//   bil++
// }
// for (let j = 0; j < num; j++) {
//   temp.push(bil)
// }  