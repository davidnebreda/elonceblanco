const express = require("express");
const getLastShow = require("./db.js");

const routes = express.Router();

routes.get("/", function(req,res) {
    res.status(200).json({"message":"Hola desde rutas"});
});

routes.get("/lastvideo", async function(req,res) {
    result = await getLastShow();
    res.status(200).json({"lasvideo": result})
})

module.exports = routes;