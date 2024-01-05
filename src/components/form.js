// Form.js
import React, { useState } from 'react';
import './form.css';

function Form({ onAddProject }) {
  const [formData, setFormData] = useState({
    projectName: '',
    projectLink: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onAddProject prop with the form data
    onAddProject(formData);

    // Reset the form data
    setFormData({
      projectName: '',
      projectLink: '',
      description: '',
    });
  };

  return (
    <div className="cst-form">
      <div className="form-title">
        <h2 className="sub-title">Add Project</h2>
        <span className="rect"></span>
      </div>
      <div className="form-inputs">
        <div>
          <label>Project Name</label>
          <input
            type="text"
            name="projectName"
            className="project"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Project Link</label>
          <input
            type="text"
            name="projectLink"
            className="project"
            value={formData.projectLink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            className="project1"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="cst-btn">
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
      <div className="svg-container">
        <img src="/images/vector.svg" alt="vector" />
      </div>
    </div>
  );
}

export default Form;
