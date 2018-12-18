const router = require("express").Router();

const marsupilamiController = require("../controllers/marsupilamiController");
router.get("/", marsupilamiController.home);
router.get("/list", marsupilamiController.list);
router.post("/add", marsupilamiController.save);
router.get("/update/:id", marsupilamiController.edit);
router.post("/update/:id", marsupilamiController.update);
router.get("/delete/:id", marsupilamiController.delete);
router.get("/signin", marsupilamiController.signin);
router.post("/login", marsupilamiController.login);
router.post("/in", marsupilamiController.in);

module.exports = router;
