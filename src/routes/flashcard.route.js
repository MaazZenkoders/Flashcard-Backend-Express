const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/flashcard.controller");

router.get("/", flashcardController.getFlashcards);
router.get("/:id", flashcardController.getFlashcardsById);
router.post("/", flashcardController.createFlashcards);
router.put("/:id", flashcardController.updateById);
router.delete("/:id", flashcardController.deleteById);

module.exports = router;
