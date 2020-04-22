export function goback(obj) {
console.log (obj.colors);
console.log (obj.currrow);

if (obj.currrow > 0)
{
  for (var i=0; i<4; i++)
  {
    obj.colors[obj.currrow][i] = "white";
    obj.result[obj.currrow][i] = "white";
    obj.colors[obj.currrow-1][i] = "white";
    obj.result[obj.currrow-1][i] = "white";
  }

   var crow = obj.currrow ;
   obj.currrow = crow - 1;
}
  console.log (obj.currrow);
  return obj;
}

export function disablegoback(obj) {

if (obj.currrow < 1)
{
  return "yes";
}

if (obj.finished === "yes")
{
  return "yes";
}
return "no";
}
