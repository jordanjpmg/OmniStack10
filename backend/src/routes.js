const { Router } = require("express");
const DevController = require("./controller/DevController");
const SearchController = require("./controller/SearchController");

const routes = Router();

//Lista de parâmetros

/*
QUERY PARAMS: req.query (Filtros, ordenação, paginação...)
ROUTE PARAMS: req.params (Identificar um recurso na alteração ou na remoção)
BODY: req.body (Dados para Criação ou alteração de um Registro)
*/

//mongoDB (branco ão relacional)

/*
routes.delete("/users/:id", (req, res) => {
  console.log(req.params);
  return res.json({ message: "jordan" });
});*/

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.get("/search", SearchController.index);

module.exports = routes;
