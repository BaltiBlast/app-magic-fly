const loginControllers = {
  getLogin: (req, res) => {
    res.render("login");
  },

  postLogin: (req, res) => {
    const { email, password } = req.body;
    console.log("Login attempt:", { email, password });
  },
};

module.exports = loginControllers;
