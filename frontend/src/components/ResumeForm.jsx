import { useState } from "react";

function ResumeForm({ setResumeData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // SEND DATA TO PARENT
    setResumeData(formData);
  };

  return (
    <div className="form-container">
      <h2>Resume Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Enter Skills"
          onChange={handleChange}
        />

        <button type="submit">
          Show Preview
        </button>
      </form>
    </div>
  );
}

export default ResumeForm;