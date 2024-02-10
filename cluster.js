const http = require("http");
const cluster = require("cluster");
const numCPUs = require("os").availableParallelism();
const wait = require("./utils/wait");
const process = require("./utils/process");

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer(async (_, res) => {
      await wait(10);
      process();
      res.writeHead(200);
      res.end("ok");
    })
    .listen(3000, () => console.log(`Listening`));
}
