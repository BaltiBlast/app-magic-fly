const db = require("../configs/airtable");
const VideoUrl = require("./videoUrl.mapper");

module.exports = {
  VideoUrl: new VideoUrl(db),
};
