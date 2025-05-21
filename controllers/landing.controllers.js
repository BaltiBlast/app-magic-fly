const { VideoUrlMapper, PicturesMapper } = require("../models/index.mapper");

const landingControllers = {
  getLandingPage: async (req, res) => {
    try {
      const videos = await VideoUrlMapper.getVideoUrl();
      const pictures = await PicturesMapper.getPicturesMapper();

      res.render("landing", { videos, pictures });
    } catch (error) {
      console.log("Error in landing page controller:", error);
    }
  },
};

module.exports = landingControllers;
