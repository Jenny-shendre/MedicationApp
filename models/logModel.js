const db = require("../config/db");

class Log {
    static create(userId, medicineId, status, callback) {
        db.query(
            "INSERT INTO AcknowledgmentLogs (user_id, medicine_id, status) VALUES (?, ?, ?)",
            [userId, medicineId, status],
            callback
        );
    }

    static findLogs(patientId, startDate, endDate, callback) {
        let query = "SELECT * FROM AcknowledgmentLogs WHERE 1=1";
        const params = [];

        if (patientId) {
            query += " AND user_id = ?";
            params.push(patientId);
        }

        if (startDate && endDate) {
            query += " AND timestamp BETWEEN ? AND ?";
            params.push(startDate, endDate);
        }

        db.query(query, params, callback);
    }
}

module.exports = Log;
