const gymRegistration = require("../models/gymRegistration.model");

const getRegistration = async (req, res) => {
  try {
    const registration = await gymRegistration.find({});
    res.status(200).json(registration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await gymRegistration.findById(id);
    res.status(200).json(registration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addRegistration = async (req, res) => {
  try {
    const registration = await gymRegistration.create(req.body);
    res.status(200).json(registration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await gymRegistration.findByIdAndUpdate(id, req.body);
    if (!registration) {
      return res
        .status(404)
        .json({ message: "Requested Registration id not Found" });
    }
    const updatedRegistration = await gymRegistration.findById(id);
    res.status(200).json(updatedRegistration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await gymRegistration.findByIdAndDelete(id);
    if (!registration) {
      return res
        .status(404)
        .json({ message: "Requested Product id not Found" });
    }
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRegistration,
  getSingleRegistration,
  addRegistration,
  updateRegistrationById,
  deleteRegistrationById,
};
