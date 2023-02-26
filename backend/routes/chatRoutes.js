const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { route } = require("./userRoutes");
const {
  accessChats,
  getChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chatController");

const router = express.Router();

router.route("/").post(protect, accessChats);
router.route("/").get(protect, getChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupRemove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
