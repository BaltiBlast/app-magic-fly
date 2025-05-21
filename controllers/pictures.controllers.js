const cloudinary = require("../configs/cloudinary");
const { PicturesMapper } = require("../models/index.mapper");

const picturesControllers = {
  postAddPicture: async (req, res) => {
    const uploadedImage = req.files.image;

    try {
      const response = await cloudinary.uploader.upload(uploadedImage.tempFilePath, {
        folder: "magic-fly",
        resource_type: "image",
      });

      const pictureData = {
        cloudinaryId: response.public_id,
        pictureUrl: response.secure_url,
      };

      await PicturesMapper.addPicture(pictureData);
      res.redirect("/dashboard");
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  },

  postDeletePicture: async (req, res) => {
    const { recordId, publicId } = req.params;

    try {
      const resCloudinary = await cloudinary.uploader.destroy(publicId, {
        resource_type: "image",
      });

      if (resCloudinary.result === "ok") {
        await PicturesMapper.deletePicture(recordId);
      }

      return res.redirect("/dashboard");
    } catch (error) {
      console.error("Error deleting image from Cloudinary:", error);
    }
  },
};

module.exports = picturesControllers;
