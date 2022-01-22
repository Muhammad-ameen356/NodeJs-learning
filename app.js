//! Core Node Js 

// const http = require("http");
// const fs = require('fs');
// const path = require("path");


// const filePath = path.join(__dirname, "data.txt");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write(`This is URL ${req.url}`);
//         res.end();
//     } else if (req.url === "/form") {
//         res.setHeader("Content-Type", "text/html")
//         res.write(`<form action='/submit' method="POST"><input name='data' placeholder="Name"/><input name='data2' placeholder="Name"/><button type="submit">Submit</button></form>`);
//         res.end();
//     } else if (req.url === "/submit") {
//         let data = ""
//         req.on("data", (chunk) => {
//             data += chunk;
//         });
//         req.on("end", () => {
//             fs.readFile(filePath, (err, oldData) => {
//                 const newData = oldData + "\n" + data;
//                 fs.writeFile(filePath, newData, () => {
//                     console.log("saved");
//                 })
//             })
//         })
//         res.write("data Submit")
//         res.end();
//     }
// })

// server.listen(500);


//! With Express 


// ! 30 minute 

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const productRoute = require('./routes/products');
const path = require('path')

// app.use middleware create karne k lye hota he 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))
app.set("view engine", "ejs");
app.set("views", "views");



app.use('/', (req, res, next) => {
    // res.send('Hello World');
    console.log(req.url);
    next();
})

app.use('/product', productRoute)

app.use('/', (req, res) => {
    res.render('home', {user: "Ameen"})
})


app.listen(3000)
// console.log("ameen express");