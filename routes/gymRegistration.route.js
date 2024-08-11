const express = require("express");
const {
  getRegistration,
  getSingleRegistration,
  addRegistration,
  updateRegistrationById,
  deleteRegistrationById,
} = require("../controllers/gymRegistration.controllers");
const router = express.Router();

router.get("/", getRegistration);

router.get("/:id", getSingleRegistration);

router.post("/", addRegistration);

router.put("/:id", updateRegistrationById);

router.delete("/:id", deleteRegistrationById);

module.exports = router;
