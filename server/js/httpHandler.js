const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQ = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = messageQ;
module.exports.initialize = (msg) => {
  //change to mesageQ.enqueue the message passed in as a parameter
  console.log('what is q ', msg);
  messageQueue.enqueue(msg);

};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('THIS IS MY REQ', req);
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  var keypresses = ['left', 'right', 'up', 'down'];
  var indexRandomizer = Math.floor(Math.random() * keypresses.length);
    if(req.method === 'GET') {
      var keyCommand = messageQueue.dequeue();
        console.log(keyCommand);
      if (keyCommand) {
        console.log('this is our new res.end ', keyCommand);
        res.end(keyCommand);
      }
      // res.end(keypresses[indexRandomizer]);
      res.end();
    } else if (req.method === 'OPTIONS'){
      res.end();
    }


  // res.end('hello');
  // res.write('hello');
  next(); // invoke next() at the end of a request to help with testing!
};
