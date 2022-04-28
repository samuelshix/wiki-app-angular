const folder = "./src/assets/entries/";
const fs = require('fs');

var id = 1;
const append = (item,id) => {
  var fileObj = {
    "id": id+1,
    "name": item.name.slice(0,-3),
    "path": '../assets/entries/' + item.name.toString()
  }
  return fileObj
}
var x = fs.readdirSync(folder, {withFileTypes: true}).map(append);

var dictstring = JSON.stringify(x);
fs.writeFile("pages.json",'', function(){});
fs.writeFile("pages.json", dictstring, function(){})
