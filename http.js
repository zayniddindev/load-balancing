const http = require("http");
const wait = require("./utils/wait");
const process = require("./utils/process");

const server = http.createServer(async (_, res) => {
  await wait(10);
  process();
  res.writeHead(200);
  res.end("ok");
});

server.listen(3000, () => console.log("Listening"));
