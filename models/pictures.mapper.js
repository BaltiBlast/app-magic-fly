const CoreMapper = require("./core.mapper");

class PicturesMapper extends CoreMapper {
  tableName = "picture_url";

  async getPicturesMapper() {
    const records = await this.db(this.tableName).select().all();

    const urls = records.map((record) => {
      const { id: recordId, fields } = record;
      return { recordId, ...fields };
    });

    return urls;
  }
}

module.exports = PicturesMapper;
