function generateBoard(input) {
  var result = [];
  var arr = [];
  var angka = input * input;

  for (var i = 0; i < input; i++) {
    if ((input % 2 === 0 && i % 2 === 0) || (input % 2 === 1 && i % 2 === 1)) {
      for (var j = 0; j < input; j++) {
        arr.push(angka);
        angka--;
      }
    } else {
      var temp = angka + 1 - input;
      for (var k = temp; k <= angka; k++) {
        arr.push(k);
      }
      angka = angka - input;
    }
    result.push(arr);
    arr = [];
  }
  return result;
}

console.log(generateBoard(14));
