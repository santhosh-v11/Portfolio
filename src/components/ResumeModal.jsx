import React from 'react';
import './ResumeModal.css';
import resume from '../assests/resume.pdf';

const ResumeModal = ({ onClose }) => {
    return (
        <div className="resume-backdrop" onClick={onClose}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
                <div className="resume-header">
                    <h2>My Resume</h2>
                    <div className="resume-actions">
                        <a href={resume} download="SanthoshV_Resume.pdf" className="resume-btn download-btn">
                            Download PDF
                        </a>
                        <button className="resume-btn close-btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
                <div className="resume-body">
                    {/* The iframe serves as an embedded PDF viewer wrapper */}
                    <iframe src={`${resume}#toolbar=0&navpanes=0&scrollbar=0`} title="Resume" className="resume-iframe" />
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
