const http = require("http");
const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, "data.txt");



const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.write("/ page");
        res.end();
    } else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write(
            "<form action='/submit' method='POST'><input name='data' /><input name='data2' /><button>Click</button></form>"
        );
        res.end();
    } else if (req.url === "/submit") {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            // console.log(data.split("&"));
            fs.readFile(filepath, (err, olddata) => {
                const newData = olddata + '\n' + data
                fs.writeFile(filepath, newData, () => {
                    console.log("saved");
                })
            })
        });
        res.write("Data Received #");
        res.end();
    }
});

server.listen(3001, () => {
    console.log("Server Run");
});
