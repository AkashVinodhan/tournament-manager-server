const Tournament = require("../models/tournamentModel");

const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find({});
    res.status(200).send(tournaments);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const createTournament = async (req, res) => {
  try {
    const { name, startDate, endDate, participants, status } = req.body;
    if ((name && startDate && endDate, participants, status)) {
      const newTournament = await Tournament.create({
        name,
        startDate,
        endDate,
        participants,
        status,
      });
      res
        .status(200)
        .send({ message: "New Tournament created", data: newTournament });
    } else {
      res.status(400).send("All fields required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const tournamentById = async (req, res) => {
  try {
    const { id } = req.params;
    const tournament = await Tournament.findOne({ _id: id });
    res.send(tournament);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const updateTournament = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, startDate, endDate, participants, status } = req.body;
    if ((name && startDate && endDate, participants, status)) {
      const filter = { _id: id };
      const update = { name, startDate, endDate, participants, status };

      const updatedTournament = await Tournament.findOneAndUpdate(
        filter,
        update,
        {
          new: true,
        }
      );
      res.send(updatedTournament);
    } else {
      res.status(400).send("All fields required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const deleteTournament = async (req, res) => {
  try {
    const { id } = req.params;
    const tournament = await Tournament.deleteOne({ _id: id });
    res.send({ message: "Deleted", deletedTournament: tournament });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getAllTournaments,
  createTournament,
  tournamentById,
  updateTournament,
  deleteTournament,
};
