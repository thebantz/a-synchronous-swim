const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  var keypresses = ['left', 'right', 'up', 'down'];
  var indexRandomizer = Math.floor(Math.random() * keypresses.length);
    if(req.method === 'GET') {
      console.log(res);
      res.end(keypresses[indexRandomizer]);
    }

  // res.end('hello');
  // res.write('hello');
  next(); // invoke next() at the end of a request to help with testing!
};
