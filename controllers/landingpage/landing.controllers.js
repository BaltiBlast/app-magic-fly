const { VideoUrl } = require("../../models/index.mapper");

const landingControllers = {
  getLandingPage: async (req, res) => {
    try {
      const urls = await VideoUrl.getVideoUrl();

      res.render("landing", { urls });
    } catch (error) {
      console.log("Error in landing page controller:", error);
    }
  },
};

module.exports = landingControllers;
