export default function update(obj, x, y) {
  if (obj.finished == "yes")
  {
    console.log ("Finished");
    return;
  }
  if (x === "0")
  {
    obj.colors[obj.currrow][y] = "blue";
  }

  if (x === "1")
  {
    obj.colors[obj.currrow][y] = "red";
  }

  if (x === "2")
  {
    obj.colors[obj.currrow][y] = "green";
  }
  if (x === "3")
  {
    obj.colors[obj.currrow][y] = "yellow";
  }
  if (x === "4")
  {
    obj.colors[obj.currrow][y] = "orange";
  }

  obj.disable = "no";
  for (var i=0; i<4; i++)
  {
    if (obj.colors[obj.currrow][i] === "white")
    {
      obj.disable = "yes";
    }
  }

  return obj;
}
