const { VideoUrlMapper } = require("../models/index.mapper");

const videosControllers = {
  postDeleteVideoLink: async (req, res) => {
    const id = req.params.id;
    try {
      await VideoUrlMapper.deleteVideoLink(id);
      res.redirect("/dashboard");
    } catch (error) {
      console.log("Delete video error", error);
    }
  },

  postAddVideoLink: async (req, res) => {
    const urlVideo = req.body.url;

    // Isolate youtube's video ID
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const videoId = urlVideo.match(regex)[1];

    // Rebuild embed youtube's video
    const urlEmbed = `https://www.youtube.com/embed/${videoId}`;

    try {
      await VideoUrlMapper.addVideoUrl(urlEmbed);
      res.redirect("/dashboard");
    } catch (error) {
      console.log("Add video error", error);
    }
  },
};

module.exports = videosControllers;
