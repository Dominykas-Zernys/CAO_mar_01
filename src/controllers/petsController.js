const { getAllPets, deleteOnePet, addNewPet } = require('../models/petsModel');

async function petsIndex(req, res) {
  const allPets = await getAllPets();
  if (!allPets) {
    res.status(500);
    return;
  }
  res.json(allPets);
}
async function petsAdd(req, res) {
  const newPetInfo = req.body;
  const newPetAdded = await addNewPet(newPetInfo);
  if (!newPetAdded) {
    res.status(500);
    return;
  }
  res.json(newPetAdded);
}
async function petsDelete(req, res) {
  const deletedPet = await deleteOnePet(req.params.id);
  if (!deletedPet) {
    res.status(500);
    return;
  }
  res.json(deletedPet);
}

module.exports = { petsIndex, petsAdd, petsDelete };
