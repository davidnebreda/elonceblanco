const express = require("express");

const routes = express.Router();

routes.get("/", function(req,res) {
    res.status(200).json({"message":"Hola desde rutas"});
});

module.exports = routes;