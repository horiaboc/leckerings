//$.getJSON("test.json", function(json) {
//    console.log(json); // this will show the info it in firebug console
//});


//'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('test.json');
let content = JSON.parse(rawdata);
console.log(content);
console.log(content.employees[0].name);
