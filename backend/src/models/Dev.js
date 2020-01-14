const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchemas");
//Schema é a estruturação de uma entidade dentro do banco de dados

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    imdex: "2dsphere"
  }
});

module.exports = mongoose.model("Dev", DevSchema);
