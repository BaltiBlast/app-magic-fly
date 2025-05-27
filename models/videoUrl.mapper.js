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

  async addVideoUrl(urlEmbed) {
    await this.db(this.tableName).create([
      {
        fields: {
          url: urlEmbed,
        },
      },
    ]);
  }

  async deleteVideoLink(recordId) {
    await this.db(this.tableName).destroy(recordId);
  }
}

module.exports = VideoUrlMapper;
