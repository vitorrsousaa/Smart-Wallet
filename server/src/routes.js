const { Router } = require("express");

const DataUserController = require("./app/controllers/DataUserController");

const router = Router();

router.get("/dataUser", DataUserController.index);

module.exports = router;
