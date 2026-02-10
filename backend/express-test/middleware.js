const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const { User } = require("./db/usermodel");
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ error: "Forbidden - No Authorization Header" });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch (err) {
        return res.status(403).json({ error: "Forbidden - Invalid Token" });
    }
};
const protectRoute = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Unauthorized - No Authorization Header" });
    }
    
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const username = decoded.username;

        const user = await User.findOne({ username }).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware: ", error.message);
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ error: "Forbidden - Invalid Token" });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ error: "Forbidden - Token Expired" });
        }
        res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = {
    authMiddleware,
    protectRoute
};
