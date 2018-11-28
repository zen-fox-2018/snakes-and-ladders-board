//your code here
function snakesLadder(num){
    let row = []
    for(let i = num; i >= 1; i--){
        let col = []
        let k = num*i
        for(let j = num*(i-1)+1; j <= num*i; j++){
            if(i % 2 === 0){
                col.push(k)
            }else{
                col.push(j)
            }
            k--
        }
        row.push(col)
    }
    return row
}

console.log(snakesLadder(8))