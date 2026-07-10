const express = require("express");
const router = express.Router();
const { createNote, getNote, updateNote, deleteNote } = require("../controllers/noteController");

router.post("/",createNote);
router.get("/",getNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

module.exports = router;