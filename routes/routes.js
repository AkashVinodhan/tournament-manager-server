const {
  getAllTournaments,
  createTournament,
  tournamentById,
  updateTournament,
  deleteTournament,
} = require("../controllers/tournamentController");

const {
  createParticipant,
  updateParticipant,
  deleteParticipant,
} = require("../controllers/participantController");

const router = require("express").Router();

router.get("/home", (req, res) => {
  res.status(200).send("API running");
});

//tournament routes
router.get("/tournaments", getAllTournaments);
router.post("/tournaments", createTournament);
router.get("/tournaments/:id", tournamentById);
router.put("/tournaments/:id", updateTournament);
router.delete("/tournaments/:id", deleteTournament);

//participant routes
router.post("/participants", createParticipant);
router.put("/participants/:id", updateParticipant);
router.delete("/participants/:id", deleteParticipant);

module.exports = router;
