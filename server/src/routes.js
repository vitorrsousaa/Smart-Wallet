const { Router } = require("express");

const DataController = require("./app/controllers/DataController");

const router = Router();

router.get("/data", DataController.index);
router.get("/data/:type", DataController.show);

module.exports = router;
