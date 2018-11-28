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
    result.push(fillResult.reverse());
  }
  return result
}

console.log(generateBoard(15));
