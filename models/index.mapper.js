const db = require("../configs/airtable");
const VideoUrlMapper = require("./videoUrl.mapper");
const PicturesMapper = require("./pictures.mapper");
const UserMapper = require("./user.mapper");

module.exports = {
  VideoUrlMapper: new VideoUrlMapper(db),
  PicturesMapper: new PicturesMapper(db),
  UserMapper: new UserMapper(db),
};
