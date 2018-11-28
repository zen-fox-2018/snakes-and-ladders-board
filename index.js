//your code here
function snakeNladder(num){
    var result = []
    for(let i = num-1; i >= 0; i --){
        var holder = []
        if(i % 2 == 0){
            for(let j = 1; j <= num; j ++){
            holder.push((i*num)+j)
                }
            }
        else{
            for(let j = num; j >= 1; j-- ){
            holder.push((i*num)+j)
        }
    }
    result.push(holder)
}
    return result
}
console.log(snakeNladder(15))