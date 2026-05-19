import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,
  address: String,
  skills: String,
  education: String,
  experience: String

});

export default mongoose.model("Resume", ResumeSchema);