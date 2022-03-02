const {
  getAllPrescriptions,
  addNewPrescription,
} = require('../models/prescriptionModel');

async function prescriptionIndex(req, res) {
  const allPrescriptions = await getAllPrescriptions();
  if (!allPrescriptions) {
    res.status(500);
    return;
  }
  res.json(allPrescriptions);
}

async function prescriptionPost(req, res) {
  const newPrescription = await addNewPrescription(req.body);
  if (!newPrescription) {
    res.status(500);
    return;
  }
  res.json(newPrescription);
}

module.exports = { prescriptionIndex, prescriptionPost };
