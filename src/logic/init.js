export default function init(color) {
  var arr = new Array(6);
  for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(5);
  }

  for (var x = 0; x < 6; x++) {
    for (var y=0; y<5; y++)
      arr[x][y] = color;
  }

  return arr;
}
