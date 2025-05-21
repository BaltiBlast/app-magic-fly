const cloudinary = require("../configs/cloudinary");

const picturesControllers = {
  addPictures: async (req, res) => {
    const uploadedImage = req.files.image;

    try {
      await cloudinary.uploader.upload(uploadedImage.tempFilePath, {
        folder: "magic-fly",
        resource_type: "image",
      });

      res.redirect("/dashboard");
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  },
};

module.exports = picturesControllers;
