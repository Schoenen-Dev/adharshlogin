function ResumePreview({ resumeData }) {

  const handlePrint = () => {

    window.print();
  };

  return (

    <div className="preview-container">

      <h2>Resume Preview</h2>

      <p>
        <strong>Name:</strong> {resumeData.name}
      </p>

      <p>
        <strong>Email:</strong> {resumeData.email}
      </p>

      <p>
        <strong>Phone:</strong> {resumeData.phone}
      </p>

      <p>
        <strong>Address:</strong> {resumeData.address}
      </p>

      <p>
        <strong>Skills:</strong> {resumeData.skills}
      </p>

      <p>
        <strong>Education:</strong> {resumeData.education}
      </p>

      <p>
        <strong>Experience:</strong> {resumeData.experience}
      </p>

      <button onClick={handlePrint}>
        Print Resume
      </button>

    </div>
  );
}

export default ResumePreview;