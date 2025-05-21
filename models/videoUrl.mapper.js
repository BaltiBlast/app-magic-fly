const CoreMapper = require("./core.mapper");

class VideoUrl extends CoreMapper {
  tableName = "video-url";

  async getVideoUrl() {
    const records = await this.db(this.tableName).select().all();

    const urls = records.map((record) => {
      const { id: recordId, fields } = record;
      return { recordId, ...fields };
    });

    return urls;
  }
}

module.exports = VideoUrl;
