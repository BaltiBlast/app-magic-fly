const cloudinary = require("../configs/cloudinary");
const { PicturesMapper } = require("../models/index.mapper");
const sharp = require("sharp");

const picturesControllers = {
  postAddPicture: async (req, res) => {
    const uploadedImage = req.files.image;

    try {
      const convertedBuffer = await sharp(uploadedImage.tempFilePath)
        .jpeg({ quality: 90, progressive: true, mozjpeg: true })
        .withMetadata(false)
        .toBuffer();

      const response = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "magic-fly",
              resource_type: "image",
              format: "jpg",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(convertedBuffer);
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
