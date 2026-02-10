const { User } = require('../db/usermodel');

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.username;
        const filteredUsers = await User.find({ username: { $ne: loggedInUserId } }).select("-password");
        console.log(filteredUsers);
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("alluser fetch error", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getUsersForSidebar };
