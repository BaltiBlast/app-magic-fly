const CoreMapper = require("./core.mapper");

class PicturesMapper extends CoreMapper {
  tableName = "picture_url";

  async getPictures() {
    const records = await this.db(this.tableName).select().all();

    const urls = records.map((record) => {
      const { id: recordId, fields } = record;
      return { recordId, ...fields };
    });

    return urls;
  }

  async addPicture(pictureData) {
    const { cloudinaryId, pictureUrl } = pictureData;
    await this.db(this.tableName).create([
      {
        fields: {
          cloudinary_id: cloudinaryId,
          url: pictureUrl,
        },
      },
    ]);
  }
}

module.exports = PicturesMapper;
