const CoreMapper = require("./core.mapper");

class Pictures extends CoreMapper {
  tableName = "picture_url";

  async getPictures() {
    const records = await this.db(this.tableName).select().all();

    const urls = records.map((record) => {
      const { id: recordId, fields } = record;
      return { recordId, ...fields };
    });

    return urls;
  }
}

module.exports = Pictures;
