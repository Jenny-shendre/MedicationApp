const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    User.create(name, email, hashedPassword, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "User registered successfully!" });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, async (err, users) => {
        if (err || users.length === 0)
            return res.status(401).json({ message: "Invalid credentials." });

        const user = users[0];
        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword)
            return res.status(401).json({ message: "Invalid credentials." });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token });
    });
};
