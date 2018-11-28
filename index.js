//your code here
function generateBoard(num){
  var total = num * num;
  var result = [];
  for (var i = 0; i < num; i++) {
    var fillResult = [];
    for (var j = 0; j < num; j++) {
      fillResult.push(total);
      total--;
    }
    if (num %2 === 0){
      if (i % 2 === 1) {
        result.push(fillResult.reverse());
      } else {
        result.push(fillResult);
      }
    }
    else{
      if (i % 2 === 1) {
        result.push(fillResult);
      } else {
        result.push(fillResult.reverse());
      }
    }
  }
  return result
}

console.log(generateBoard(15));
console.log(generateBoard(8));
