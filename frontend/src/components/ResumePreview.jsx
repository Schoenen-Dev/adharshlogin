function ResumePreview({ resumeData }) {
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
        <strong>Skills:</strong> {resumeData.skills}
      </p>
    </div>
  );
}

export default ResumePreview;