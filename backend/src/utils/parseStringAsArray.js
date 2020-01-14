module.exports = function parseStringAsArray(arryAsString) {
  return arryAsString.split(",").map(tech => tech.trim()); // Quando tiver uma vigula corta automatente e elimina os espaços antes e no final da string
};
