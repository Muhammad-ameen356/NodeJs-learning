const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const userJsonFile = path.join(__dirname, "../", "data", "users.json");

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(userJsonFile, (err, data) => {
      console.log("Previous Data", data.toString());
      if (err) {
        return reject(err);
      }
      const dataString = data.toString();
      if (dataString) {
        resolve(JSON.parse(dataString));
      } else {
        resolve([]);
      }
    });
  });
};

const writeFile = (dataToWrite) => {
  new Promise((resolve, reject) => {
    fs.writeFile(userJsonFile, JSON.stringify(dataToWrite), (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

exports.storeUser = async (user) => {
  try {
    let data = await readFile();
    console.log("New Data", data);
    console.log("New Data", user);
    user.password = await bcrypt.hash(user.password, 12);
    if (data) {
      data.push(user);
    } else {
      data = [user];
    }
    await writeFile(data);
    return true;
  } catch (e) {
    console.log(e);
  }
};

exports.getAUser = async (email) => {
  try {
    const users = await readFile();
    const matched = users.find((u) => u.email === email);
    if (matched) {
      return matched;
    } else {
      throw new Error("User Not Found");
    }
  } catch (e) {
    console.log(e);
  }
};

exports.fetchAll = async () => {
  try {
    return await readFile();
  } catch (e) {
    console.log(e);
  }
};
