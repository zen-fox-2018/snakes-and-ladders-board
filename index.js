//your code here
function ularTangga(x){
  let output = []
  let counter = x * x

  for (let i = 0 ; i < x ; i++){
    let arrDalam = []

    if ((x-i) % 2 === 0) {

      for (let j = 0 ; j < x ; j++) {
        arrDalam[j] = counter
        counter--
      }

    } else {

      for (let j =  x-1 ; j >= 0 ; j--){
        arrDalam[j] = counter
        counter--
      }

    }
    output.push(arrDalam)
  }
  return output
}

console.log(ularTangga(15));
