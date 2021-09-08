const express = require("express");
const controller = require("../controllers/Report_Controller");

const routes = express.Router();

routes.get("/", controller.ReportGet);

routes.post("/getdata", controller.ReportPostData);
routes.post("/exportdata", controller.ReportPostExport);

module.exports = routes;
