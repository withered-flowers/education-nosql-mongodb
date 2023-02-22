const express = require("express");
const router = express.Router();

const {
  findAllUsers,
  createUser,
  findUserById,
} = require("../controllers/user");

router.get("/", findAllUsers);
router.get("/:id", findUserById);
router.post("/", createUser);

module.exports = router;
