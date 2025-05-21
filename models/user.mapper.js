const CoreMapper = require("./core.mapper");

class UserMapper extends CoreMapper {
  tableName = "user";

  async getUser() {
    const records = await this.db(this.tableName).select().all();
    const response = records[0].fields;
    return response;
  }
}

module.exports = UserMapper;
