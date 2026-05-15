import Resume from "../models/Resume.js";


// CREATE RESUME
export const createResume = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      phone,
      skills,
      education,
      experience,
    } = req.body;

    const newResume = new Resume({
      userId,
      name,
      email,
      phone,
      skills,
      education,
      experience,
    });

    await newResume.save();

    res.status(201).json({
      message: "Resume Created",
      newResume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET ALL RESUMES
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET SINGLE RESUME
export const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// UPDATE RESUME
export const updateResume = async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Resume Updated",
      updatedResume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// DELETE RESUME
export const deleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Resume Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};