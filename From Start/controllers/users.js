const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.getSignIn = (req, res) => {
  res.render("auth/signin");
};

exports.getSignUp = (req, res) => {
  res.render("auth/signup");
};

exports.postSignIn = async (req, res) => {
  try {
    const userCred = req.body;
    const user = await userModel.getAUser(userCred.email);

    const result = await bcrypt.compare(userCred.password, user.password);

    // res.send(result);

    if (result) {
      // res.setHeader("Set-Cookie", "isAuthenticated=true; HttpOnly")
      req.session.user = userCred.email;
      res.send("Login Successfull")
    } else {
      res.send("Invalid email and password");
    }
  } catch (e) {
    res.send(e);
  }
};

exports.postSignUp = async (req, res) => {
  const user = req.body;

  console.log("user", user);

  // const allUsers = await userModel.fetchAll();
  // userModel
  //   .getAUser(user.email)
  //   .then((matched) => {
  //     return res.send("User already Exist");
  //   })
  //   .catch(async () => {
  //     try {

  const allUsers = await userModel.fetchAll();

  const matched = allUsers.find((u) => u.email === user.email);
  if (!matched) {
    await userModel.storeUser(user);
    res.redirect("signin");
  } else {
    res.send("User Already Exists");
  }

  //   } catch (err) {
  //     res.send(err);
  //   }
  // });
};
