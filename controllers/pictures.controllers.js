const cloudinary = require("../configs/cloudinary");
const { PicturesMapper } = require("../models/index.mapper");

const picturesControllers = {
  postPicture: async (req, res) => {
    const uploadedImage = req.files.image;

    try {
      const response = await cloudinary.uploader.upload(uploadedImage.tempFilePath, {
        folder: "magic-fly",
        resource_type: "image",
      });

      const pictureData = {
        cloudinaryId: response.asset_id,
        pictureUrl: response.secure_url,
      };

      await PicturesMapper.addPicture(pictureData);
      res.redirect("/dashboard");
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  },
};

module.exports = picturesControllers;
