//# Section 4: How Node.js Works: A Look Behind The Scenes

//# 35. Events in Practice
const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

//const myEmitter = new EventEmitter()
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Kshitij");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////////////////
//Http module is based on events. Lets see!
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request");
});

server.on("close", () => {
  console.log("Server closed");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});