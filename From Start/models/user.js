const fs = require("fs");
const path = require("path");
const userJsonFile = path.join(__dirname, "../", "data", "users.json");

const readFile = () => {
  new Promise((resolve, reject) => {
    fs.readFile(userJsonFile, (err, data) => {
      if (err) {
        return reject(err);
      }
      const dataString = data.toString();
      if (dataString) {
        resolve(JSON.parse(dataString));
      } else{
          resolve([])
      }
    });
  });
};

const writeFile = (dataToWrite) => {
  new Promise((resolve, reject) => {
    fs.writeFile(userJsonFile, dataToWrite, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const storeUser = async (user) => {
  try {
    const data = await readFile();
    if (data) {
    }
    data.push(user);
  } catch (e) {
    console.log(e);
  }
};
