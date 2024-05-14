const  data  = require("../../data");

const createFlashcards = (req, res) => {
  let items = data.map((item) => item.id);
  let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1;
  let newCard = {
    id: newId,
    content: req.body.content,
    topic: req.body.topic,
  };
  data.push(newCard);
  res.status(201).json({
    message: "successfully created",
    data: newCard,
  });
};

const getFlashcards = (req, res) => {
  res.status(200).json({
    message: "Retrieved Successfully",
    data,
  });
};

const getFlashcardsById = (req, res) => {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
};

const updateById = (req, res) => {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let updateData = {
      id: found.id,
      content: req.body.content,
      topic: req.body.topic,
    };

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updateData);

    res.status(201).json({
      message: "data updated",
      data: updateData,
    });
  } else {
    res.status(404).json({
      message: "unable to insert data because data inserted not matched",
    });
  }
};

const deleteById = (req, res) => {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1);

    res.sendStatus(204).json({ message: "Deleted Successfully" });
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  createFlashcards,
  getFlashcards,
  getFlashcardsById,
  updateById,
  deleteById
};
