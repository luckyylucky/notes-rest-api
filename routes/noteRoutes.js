const express = require("express");
const router = express.Router();
const { createNote, getNote, updateNote, deleteNote } = require("../controllers/noteController");
const authorize = require("../middleware/authorize");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/",
    authMiddleware,
    createNote);
router.get("/",
    authMiddleware,
    getNote);
router.put("/:id",
    authMiddleware,
    updateNote);
router.delete("/:id",
    authMiddleware,
    deleteNote
);

module.exports = router;