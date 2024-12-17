const express = require("express");
const { addMedicine, getMedicines, deleteMedicine } = require("../controllers/medicineController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, addMedicine);
router.get("/", verifyToken, getMedicines);
router.delete("/:medicineId", verifyToken, deleteMedicine);

module.exports = router;
