import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB Atlas Connection
mongoose.connect(
  "mongodb+srv://adharshsr2003_db_user:mh3LaN7Csz0R3heu@resumebuilder.hz0tfib.mongodb.net/loginpage?retryWrites=true&w=majority&appName=ResumeBuilder"
)
.then(() => {
  console.log("MongoDB Atlas Connected");
})
.catch((err) => {
  console.log(err);
});



// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


// Users Collection
const User = mongoose.model("User", UserSchema);



// Signup API
app.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.json({
        message: "User already exists",
      });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save user
    await newUser.save();

    res.json({
      message: "Signup successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Signup failed",
    });
  }
});




// Login API
app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {

      return res.json({
        message: "User not found",
      });
    }

    // Check password directly
    if (password !== user.password) {

      return res.json({
        message: "Invalid password",
      });
    }

    res.json({
      message: "Login successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Login failed",
    });
  }
});




// Resume Schema
const ResumeSchema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,
  address: String,
  skills: String,
  education: String,
  experience: String,

});


// Resume Collection
const Resume = mongoose.model("Resume", ResumeSchema);




// Save Resume API
app.post("/saveResume", async (req, res) => {

  try {

    console.log(req.body);

    const newResume = new Resume(req.body);

    await newResume.save();

    res.json({
      message: "Resume Saved Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error Saving Resume"
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});