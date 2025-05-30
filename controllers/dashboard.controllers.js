const { PicturesMapper, VideoUrlMapper } = require("../models/index.mapper");

const dashboardControllers = {
  getDashboard: async (req, res) => {
    const videos = await VideoUrlMapper.getVideoUrl();
    const pictures = await PicturesMapper.getPictures();

    res.render("dashboard", {
      videos,
      pictures,
    });
  },
};

module.exports = dashboardControllers;
