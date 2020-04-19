export default function calculate(obj) {
  console.log ("calculate");
  if (obj.disable === "yes")
  {
    console.log ("all rows are not populated");
    return obj;
  }

  for (var i=0; i<4; i++)
  {
    console.log ("for loop index:"+i);

  if (obj.colors[obj.currrow][i] === obj.target[i])
  {
    obj.result[obj.currrow][i] = "blue";
    console.log ("correct " + i);
  } else {
    console.log ("incorrect " + obj.colors[obj.currrow][i] + obj.target[i]);
    obj.result[obj.currrow][i] = "red";
  }
}

for (var i=0; i<4; i++)
{
  if (obj.result[obj.currrow][i] === "red")
  {
    for (var j=0; j<4; j++)
    {
      if (obj.target[j] === obj.colors[obj.currrow][i])
      {
        obj.result[obj.currrow][i] = "yellow";
        break;
      }
    }
  }
}

var isComplete = 1;
for (var i=0; i<4; i++)
{
  if (obj.result[obj.currrow][i] != "blue")
  {
    isComplete = 0;
    break;
  }
}

obj.currrow = obj.currrow + 1;
if (obj.currrow == obj.maxtries)
{
  obj.finished = "yes";
}

if (isComplete)
{
  obj.finished = "yes";
}
if (obj.finished === "yes")
{
  obj.displayTarget = obj.target;
  obj.disable = "yes";

}
return obj;
}
