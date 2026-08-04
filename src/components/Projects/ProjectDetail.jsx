import React from "react";
import { useParams, Link } from "react-router-dom";
import { ongoingProjects, legacyProjects } from "../../assets/projects.js";
import { slugify } from "../../utils/slugify.js";
import "./Projects.css";

const allProjects = [...ongoingProjects, ...legacyProjects];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => slugify(p.projectTitle) === slug);

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project not found</h1>
        <Link to="/projects" className="back-to-projects">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-to-projects">
        ← Back to Projects
      </Link>

      <h1>{project.projectTitle}</h1>
      <div className="project-detail-type">{project.projectType}</div>

      <div className="project-detail-media iframe-container">
        {project.projectUrl ? (
          <iframe
            width="100%"
            height="400"
            src={project.projectUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={project.imageUrl} alt={project.projectTitle} />
        )}
      </div>

      <p className="project-detail-info">{project.info}</p>
    </div>
  );
};

export default ProjectDetail;