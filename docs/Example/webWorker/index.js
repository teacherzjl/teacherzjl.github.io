let worker = new Worker("./work.js");
worker.postMessage("Hello World");
worker.onmessage = function (event) {
  console.log("Received message " + event.data);
};
