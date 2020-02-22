const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  console.log('what is the message', message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  console.log(messages)
  return messages.shift();
};