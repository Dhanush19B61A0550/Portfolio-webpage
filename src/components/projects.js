import React from "react";
import "./projects.css";

export default function Projects({ projectsData }) {
  console.log(projectsData);
  return (
    <div className="cst-projects" id="projects">
      <div className="project-title">
        <h2 className="sub-title">Projects</h2>
        <span className="rect"></span>
      </div>
      <div className="project-container">
        {/* <div className="card">
                    <div className="card-content">
                        <div className="card-title">Project Name</div>
                        <div className="card-desc">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</div>
                        <div className="card-btn"><button>View Project</button></div>
                    </div>
                    <div className="card-img">
                        <img src="/images/card1.png" alt="card1"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">Project Name</div>
                        <div className="card-desc">What was your role, your deliverables, if the project was personal, freelancing.</div>
                        <div className="card-btn"><button>View Project</button></div>
                    </div>
                    <div className="card-img">
                        <img src="/images/card2.png" alt="card2"/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">Project Name</div>
                        <div className="card-desc">You can also add in this description the type of the project, if it was for web, mobile, electron.</div>
                        <div className="card-btn"><button>View Project</button></div>
                    </div>
                    <div className="card-img">
                        <img src="/images/card3.png" alt="card3"/>
                    </div>
                </div> */}
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <div className="card-title">{project.projectName}</div>
              <div className="card-desc">{project.description}</div>
              <div className="card-btn">
                <button>View Project</button>
              </div>
            </div>
          </div>    
        ))}
      </div>
    </div>
  );
}
