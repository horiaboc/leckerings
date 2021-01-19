//collectind json data and printing

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

// $.get('https://www.abeautifulplate.com/roasted-broccoli-toasted-almonds-lemon-pecorino-cheese/').then(function (html) {
//     // Success response
//     // var $mainbar = $(html).find('#mainbar');
//     // document.write($mainbar.html());
//     console.log("did it");
// }, function () {
//     // Error response
//     document.write('Access denied');
// });


var http = require('http');
var https = require('https');
var htmlContent = "";

// var options = {
//   host: 'www.abeautifulplate.com',
//   port: 443,
//   path: '/roasted-broccoli-toasted-almonds-lemon-pecorino-cheese',
//   method: 'GET'
// };


//this is not working because there are several objects in one script tag, so loop through fix required
var options = {
  host: 'thehungrywaitress.com',
  port: 443,
  path: '/cooked-salmon-poke-bowl',
  method: 'GET'
};


var req = https.request(options, function (res) {
  // console.log("statusCode: ", res.statusCode);
  // console.log("headers: ", res.headers);

  console.log("downloading");

  res.setEncoding('utf8');

  res.on('data', function (htmlChunk) {
    htmlContent += htmlChunk;
  });

  res.on('end', function () {
    console.log("received");
    parseContent();
  });

});
req.end();

req.on('error', function (e) {
  console.error(e);
});

function parseContent() {

  console.log("parsing");

  var content = $('<div></div>');
  content.html(htmlContent);
  var scripts = $('script[type="application/ld+json"]', content);
  for(var i=0; i<scripts.length; i++){
    var obj = JSON.parse(scripts[i].text);
    if(obj["@type"] == "Recipe"){
      console.log("found it");
      console.log(obj);
    }
  };
}

function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}