const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });


    res.status(201).json({
      message: "User Registered Successfully!",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message : "All Field are Required"
        });
    }

    const existingUser = await User.findOne({
        email
    });

    if(!existingUser){
        return res.status(400).json({
            message : "Invalid Email or Password"
        });
    }

    const isMatch = await bcrypt.compare(password,existingUser.password);

    if(!isMatch){
        return res.status(400).json({
            message : "Invalid Email or Passsword"
        });
    }

    const token = jwt.sign(
        {
            id : existingUser.id,
            role : existingUser.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "30m"
        }
    );

    return res.status(200).json({
        message : "Login Success!",
        token
    });



  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
    registerUser,
    loginUser,
};