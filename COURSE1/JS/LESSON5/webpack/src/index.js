var tools = require("./calculate");
var value = tools.sum(10,20);
console.log("Value: "+value);



var tools2 = require("./calculate2");
var value = tools2.divide(10,20);
console.log("Div Value: "+value);


// expose tools globally (in the browser)
window.tools = tools;
window.tools2 = tools2;