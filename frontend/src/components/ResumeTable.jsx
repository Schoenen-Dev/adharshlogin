import { useEffect, useState } from "react";
import axios from "axios";

function ResumeTable() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    axios
      .get("https://resume-backend-lhow.onrender.com")
      .then((res) => setResumes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Resume Data</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Skills</th>
            <th>Education</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {resumes.map((resume) => (
            <tr key={resume._id}>
              <td>{resume.name}</td>
              <td>{resume.email}</td>
              <td>{resume.phone}</td>
              <td>{resume.address}</td>
              <td>{resume.skills}</td>
              <td>{resume.education}</td>
              <td>{resume.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResumeTable;