//your code here
function snakeAndLadder (dimension) {
    var number = dimension * dimension;
    var result = [];
    for (var i = 0; i < dimension; i++) {
        var temp = [];
        for (var j = 0; j < dimension; j++) {
            if (dimension % 2 == 0 && i % 2 != 0) {
                temp[(dimension-1)-j] = number;
            } else if (dimension % 2 !=0 && i % 2  == 0) {
                temp[(dimension-1)-j] = number;
            }else {
                temp.push (number);
            }
            number--;
        }
        result.push (temp);
    }
    return result;
}
console.log (snakeAndLadder (15));
console.log (snakeAndLadder (8));