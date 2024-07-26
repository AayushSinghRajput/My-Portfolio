const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  const { name, email, purpose, contactNo } = req.body;

  const newContact = new Contact({
    name,
    email,
    purpose,
    contactNo,
  });

  try {
    await newContact.save();
    res.status(200).send("Contact saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving contact.");
  }
});

module.exports = router;
