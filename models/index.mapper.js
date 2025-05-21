const db = require("../configs/airtable");
const VideoUrl = require("./videoUrl.mapper");
const Pictures = require("./pictures.mapper");

module.exports = {
  VideoUrl: new VideoUrl(db),
  Pictures: new Pictures(db),
};
