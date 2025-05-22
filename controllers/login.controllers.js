const { UserMapper } = require("../models/index.mapper");
const bcrypt = require("bcrypt");

const loginControllers = {
  getLogin: (req, res) => {
    res.render("login");
  },

  postLogin: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await UserMapper.getUser();

    const hashedPassword = user.user_password;
    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword || email !== user.user_email) {
      const errorMessage = "Informations invalides";
      return res.render("login", { errorMessage });
    }

    req.session.user = true;
    res.redirect("/dashboard");
  },

  postLogout: (req, res) => {
    req.session.destroy();
    res.redirect("/login");
  },
};

module.exports = loginControllers;
