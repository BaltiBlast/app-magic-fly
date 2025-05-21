const { VideoUrl } = require("../models/index.mapper");
const { Pictures } = require("../models/index.mapper");

const landingControllers = {
  getLandingPage: async (req, res) => {
    try {
      const videos = await VideoUrl.getVideoUrl();
      const pictures = await Pictures.getPictures();

      res.render("landing", { videos, pictures });
    } catch (error) {
      console.log("Error in landing page controller:", error);
    }
  },
};

module.exports = landingControllers;
