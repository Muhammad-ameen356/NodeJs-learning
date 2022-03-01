// ! FIrst Video
// const http = require("http");
// const fs = require('fs');
// const path = require('path');

// const filepath = path.join(__dirname, "data.txt");
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     if (req.url === "/") {
//         res.write("/ page");
//         res.end();
//     } else if (req.url === "/form") {
//         res.setHeader("Content-Type", "text/html");
//         res.write(
//             "<form action='/submit' method='POST'><input name='data' /><input name='data2' /><button>Click</button></form>"
//         );
//         res.end();
//     } else if (req.url === "/submit") {
//         let data = "";
//         req.on("data", (chunk) => {
//             data += chunk;
//         });
//         req.on("end", () => {
//             // console.log(data.split("&"));
//             fs.readFile(filepath, (err, olddata) => {
//                 const newData = olddata + '\n' + data
//                 fs.writeFile(filepath, newData, () => {
//                     console.log("saved");
//                 })
//             })
//         });
//         res.write("Data Received #");
//         res.end();
//     }
// });

//! Second Video

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const formRoutes = require("./routes/form");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/form", formRoutes);

app.use((req, res, next) => {
  res.send("Welcome To express app");
});

app.listen(3001, () => {
  console.log("Server Run");
});
