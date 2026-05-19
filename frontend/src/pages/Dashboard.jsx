import { useState } from "react";

import Navbar from "../components/Navbar";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

function Dashboard() {

  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    education: "",
    experience: "",
  });

  return (
    <div>

      <Navbar />

      <div className="dashboard">

        <ResumeForm setResumeData={setResumeData} />

        <ResumePreview resumeData={resumeData} />

      </div>

    </div>
  );
}

export default Dashboard;