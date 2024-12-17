const db = require("../config/db");

class Medicine {
    static create(userId, name, dosage, scheduleTime, callback) {
        db.query(
            "INSERT INTO Medicines (user_id, name, dosage, schedule_time) VALUES (?, ?, ?, ?)",
            [userId, name, dosage, scheduleTime],
            callback
        );
    }

    static findByUser(userId, callback) {
        db.query("SELECT * FROM Medicines WHERE user_id = ?", [userId], callback);
    }

    static delete(medicineId, callback) {
        db.query("DELETE FROM Medicines WHERE id = ?", [medicineId], callback);
    }
}

module.exports = Medicine;
