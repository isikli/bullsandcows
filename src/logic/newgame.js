import init from "./init";

export default function newgame()
{
   var i;
   var arr = [];
  for (i = 0; i < 4; i++)
  {
     var idx = Math.floor(Math.random() * 5);
    switch (idx) {
      case 0:
        arr.push ("blue");
        break;
      case 1:
        arr.push ("red");
        break;
      case 2:
        arr.push ("green");
        break;
      case 3:
        arr.push ("yellow");
        break;
      case 4:
        arr.push ("orange");
        break;
      }
    }
    var obj = {};
    obj.target = arr;
    obj.displayTarget = Array (4).fill ("black");
    obj.colors = init ("white");
    obj.currrow=0;
    obj.result=init ("white");
    obj.disable="yes";
    obj.maxtries=6;
    obj.finished="no";

    console.log (obj.target);

    return obj;
}
