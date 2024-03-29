const express = require("express");
const auth = require("../../middleware/authentication");
const router = express.Router();
const {
  showProfile,
  updateProfile,
  updatePassword,
  showCurrentUser,
} = require("../../controllers/user/profileController");
const profileValidation = require("../../validations/user/profileValidation");
const updatePasswordValidation = require("../../validations/user/updatePasswordValidation");

const authorize = require("../../middleware/authorization");

router.use(auth);

router.use(authorize("admin", "buyer"));

router.get("/", showProfile);
router.get("/showMe", showCurrentUser);
router.put("/", profileValidation, updateProfile);
router.patch("/updatePassword", updatePasswordValidation, updatePassword);

module.exports = router;
