const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware.js");
const authorize = require("../middleware/authorize.js");


router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/admin",
        authMiddleware,
        authorize("admin"),
        (req,res) => {
            res.status(200).json({
                message : "Welcome Admin"  //Admin's Dashboad
            });
        }
    )

module.exports = (router);