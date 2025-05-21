const CoreMapper = require("./core.mapper");

class VideoUrlMapper extends CoreMapper {
  tableName = "video_url";

  async getVideoUrl() {
    const records = await this.db(this.tableName).select().all();

    const urls = records.map((record) => {
      const { id: recordId, fields } = record;
      return { recordId, ...fields };
    });

    return urls;
  }
}

module.exports = VideoUrlMapper;
