const Medicine = require("../models/medicineModel");

exports.addMedicine = (req, res) => {
    const { name, dosage, schedule_time } = req.body;
    const userId = req.user.id;

    Medicine.create(userId, name, dosage, schedule_time, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Medicine added successfully!" });
    });
};

exports.getMedicines = (req, res) => {
    const userId = req.user.id;

    Medicine.findByUser(userId, (err, medicines) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(medicines);
    });
};

exports.deleteMedicine = (req, res) => {
    const { medicineId } = req.params;

    Medicine.delete(medicineId, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Medicine deleted successfully!" });
    });
};
