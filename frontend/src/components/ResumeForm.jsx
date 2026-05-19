import { useState } from "react";
import axios from "axios";
import "./ResumeForm.css";

function ResumeForm({ setResumeData }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    education: "",
    experience: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // Save to MongoDB
      const response = await axios.post(
        "http://localhost:5000/saveResume",
        formData
      );

      console.log(response.data);

      // Show data in Resume Preview
      setResumeData(formData);

      alert("Resume Saved Successfully");

    } catch (error) {

      console.log(error);

      alert("Error Saving Resume");
    }
  };



  return (

    <div className="main-container">

      <div className="resume-card">

        <h1 className="title">
          Resume Builder
        </h1>

        <p className="subtitle">
          Create Your Professional Resume
        </p>

        <form onSubmit={handleSubmit} className="resume-form">

          <div className="input-group">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

          </div>



          <div className="input-group">

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />

          </div>



          <textarea
            name="skills"
            placeholder="Skills"
            onChange={handleChange}
          ></textarea>



          <textarea
            name="education"
            placeholder="Education"
            onChange={handleChange}
          ></textarea>



          <textarea
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
          ></textarea>



          <button type="submit">
            Save Resume
          </button>

        </form>

      </div>

    </div>
  );
}

export default ResumeForm;