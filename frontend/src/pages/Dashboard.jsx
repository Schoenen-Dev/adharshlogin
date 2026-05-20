import { useState } from "react";

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

      <ResumeForm setResumeData={setResumeData} />

      <ResumePreview resumeData={resumeData} />

    </div>
  );
}

export default Dashboard;