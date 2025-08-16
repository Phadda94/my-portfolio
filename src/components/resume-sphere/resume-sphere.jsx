import './resume-sphere.css'

export default function ResumeSphereCSS({ onClick }) {
  return (
    <div className="resume-container">
      <div
        className="resume-sphere"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <h2 className="resume-text">Resume</h2>
      </div>
    </div>
  )
}