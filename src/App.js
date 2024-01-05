import React , { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Form from "./components/form";
import Projects from "./components/projects";
import ContactUs from "./components/contactus";
import "./styles.css";

export default function App() {
  const [projectsData, setProjectsData] = useState([]);

  const addProject = (project) => {
    setProjectsData([...projectsData, project]);
  };
  return (
    <div className="cst-portfolio" id="home">
      <Header />
      <Banner />
      <Form onAddProject={addProject} />
      <Projects projectsData={projectsData} />
      <ContactUs/>
    </div>
  );
}
