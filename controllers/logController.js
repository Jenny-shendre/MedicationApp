const Log = require("../models/logModel");

exports.addLog = (req, res) => {
    const { medicineId, status } = req.body;
    const userId = req.user.id;

    Log.create(userId, medicineId, status, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Log added successfully!" });
    });
};

exports.getLogs = (req, res) => {
    const { patientId, startDate, endDate } = req.query;

    Log.findLogs(patientId, startDate, endDate, (err, logs) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(logs);
    });
};
