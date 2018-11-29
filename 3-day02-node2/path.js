const path=require("path");
console.log(__dirname);
console.log(path.join(__dirname,'./path.js'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.dirname('/foo/bar/baz/asdf/quux.html'));
console.log(path.extname('/foo/bar/baz/asdf/quux.html'));