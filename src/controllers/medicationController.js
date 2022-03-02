const { getAllMeds, addNewMed } = require('../models/medicationModel');

async function medsIndex(req, res) {
  const allMeds = await getAllMeds();
  if (!allMeds) {
    res.status(500);
    return;
  }
  res.json(allMeds);
}

async function medsPost(req, res) {
  const newMed = await addNewMed(req.body);
  if (!newMed) {
    res.status(500);
    return;
  }
  res.json(newMed);
}

module.exports = { medsIndex, medsPost };
