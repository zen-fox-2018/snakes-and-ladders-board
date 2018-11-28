//your code here
function snakeBoard(num){
    var angka=num*num
    var output=[]
    var angkaincre = 1
    for(let i=num-1; i >=0 ; i--){
            let outputDalam=[]
            for(let j=1; j <= num; j++){
                if(i%2 == 1){
                    outputDalam.push(angka)
                    angka--
                    angkaincre = angka-num
                }else{
                    outputDalam.push(angkaincre + j)
                    angka--
                   
                }
            }
        output.push(outputDalam)
    }
    return output
}

console.log(snakeBoard(12))