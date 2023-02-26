const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

//the register route
router.route("/").post(registerUser).get(protect, allUsers);

//the login route
router.post("/login", authUser);

module.exports = router;
