const Participant = require("../models/participantModel");

const createParticipant = async (req, res) => {
  try {
    const { name, id } = req.body;
    if (name) {
      const newParticipant = await Participant.create({
        name,
        tournament: id,
      });
      res
        .status(200)
        .send({ message: "New Participant created", data: newParticipant });
    } else {
      res.status(400).send("Name required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const updateParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (name) {
      const filter = { _id: id };
      const update = { name };

      const updatedParticipant = await Participant.findOneAndUpdate(
        filter,
        update,
        {
          new: true,
        }
      );
      res.send(updatedParticipant);
    } else {
      res.status(400).send("Name required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const deleteParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const participant = await Participant.deleteOne({ _id: id });
    res.send({ message: "Deleted", deletedParticipant: participant });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  createParticipant,
  updateParticipant,
  deleteParticipant,
};
