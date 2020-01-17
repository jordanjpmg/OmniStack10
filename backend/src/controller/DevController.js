const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket");

/*Funções controller : 
index:  mostrar lita de regisro
show: mostrar apenas um registro
store: criar registro
update: alterar registro
destroy: deletar registro

*/

module.exports = {
  async index(req, res) {
    const devs = await Dev.find(); //Exibe todos Devs casttrados
    return res.json(devs);
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      /**
       * Filtrar os deve que estão a 'X'KM  de distancia
       * e que o novo dev tenho pelo menos uma das tecnologias filtradas
       */

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray
      );
      sendMessage(sendSocketMessageTo, "new-dev", dev);
    }
    return res.json(dev);
  }
};
