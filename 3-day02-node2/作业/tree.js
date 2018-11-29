
var fs = require("fs")
function walk(dir) {
    var children = []
    fs.readdirSync(dir).forEach(function(filename){
        var path = dir+"/"+filename;
        var stat = fs.statSync(path);
        if (stat && stat.isDirectory()) {
            children = children.concat(walk(path))
        }
        else {
            children.push(path)
        }
    })

    return children
}
console.log(walk('text'));