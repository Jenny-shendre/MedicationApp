const express = require("express");
const { addLog, getLogs } = require("../controllers/logController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, addLog);
router.get("/", verifyToken, getLogs);

module.exports = router;
