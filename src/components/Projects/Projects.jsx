import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Header2 from "../Header/Header2";
import { ongoingProjects, researchProjects , legacyProjects } from "../../assets/projects.js";
import { slugify } from "../../utils/slugify.js";

const Projects = () => {
  return (
    <div>
      <Header2 title="Project Gallery" subtitle="Welcome to our " />
      <div className="projects">
        {/* Ongoing Projects Section */}
        <div className="projects-section">
          <div className="section-heading">
            <h2>Ongoing Projects</h2>
          </div>
          <div className="project-container hovercontain">
            {ongoingProjects.map((project, index) => (
              <Link
                to={`/projects/${slugify(project.projectTitle)}`}
                className="project project2"
                key={index}
              >
                <div className="project-image iframe-container">
                  {project.projectUrl ? (
                    <iframe
                      width="300"
                      height="250"
                      src={project.projectUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img src={project.imageUrl} alt={project.projectTitle} />
                  )}
                </div>
                <div className="project-title">{project.projectTitle}</div>
                <div className="project-details">
                  <div className="project-type project-type2">
                    {project.projectType}
                  </div>
                  <div className="button button2">View Project</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Research Projects Section */}
        <div className="projects-section">
          <div className="section-heading">
            <h2>Research Projects</h2>
          </div>
          <div className="project-container hovercontain">
            {researchProjects.map((project, index) => (
              <Link
                to={`/projects/${slugify(project.projectTitle)}`}
                className="project project2"
                key={index}
              >
                <div className="project-image iframe-container">
                  {project.projectUrl ? (
                    <iframe
                      width="300"
                      height="250"
                      src={project.projectUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img src={project.imageUrl} alt={project.projectTitle} />
                  )}
                </div>
                <div className="project-title">{project.projectTitle}</div>
                <div className="project-details">
                  <div className="project-type project-type2">
                    {project.projectType}
                  </div>
                  <div className="button button2">View Project</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Legacy Projects Section */}
        <div className="projects-section">
          <div className="section-heading">
            <h2>Legacy Projects</h2>
          </div>
          <div className="project-container hovercontain">
            {legacyProjects.map((project, index) => (
              <Link
                to={`/projects/${slugify(project.projectTitle)}`}
                className="project project2"
                key={index}
              >
                <div className="project-image iframe-container">
                  {project.projectUrl ? (
                    <iframe
                      width="300"
                      height="250"
                      src={project.projectUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img src={project.imageUrl} alt={project.projectTitle} />
                  )}
                </div>
                <div className="project-title">{project.projectTitle}</div>
                <div className="project-details">
                  <div className="project-type project-type2">
                    {project.projectType}
                  </div>
                  <div className="button button2">View Project</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;