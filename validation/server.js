const http = require("http");
const hostname = "192.168.0.101";
const port = process.env.port || 5000;
const app = require("./app");

app.listen(port,  () => {
  console.log(" Server running at  " + port);
});
