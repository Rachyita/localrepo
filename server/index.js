// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: New Req Received\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     res.end("Hello From Server");
//   });

// });

// myServer.listen(8000, () => console.log("Server Started"));

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "a simple api"
  })
} )

app.listen(5000,() => {
  console.log("ap")
})