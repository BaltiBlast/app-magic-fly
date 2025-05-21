const picturesControllers = {
  addPictures: async (req, res) => {
    const uploadedImage = req.files.image;
    console.log("uploadedImage", uploadedImage);
  },
};

module.exports = picturesControllers;
