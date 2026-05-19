import User from "../models/User.js";
import jwt from "jsonwebtoken";


// SIGNUP
export const signup = async (req, res) => {

  try {

    console.log(req.body);

    const { name, email, password } = req.body;

    // CHECK USER
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });
    }

    // CREATE USER
    const newUser = new User({
      name,
      email,
      password,
    });

    // SAVE USER
    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};




// LOGIN
export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });
    }

    // CHECK PASSWORD DIRECTLY
    if (password !== user.password) {

      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // TOKEN
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};