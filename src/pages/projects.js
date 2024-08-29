import React from "react";
import Project from "../components/Project";
import projects from "../content/projects.json";
import ProjectStyles from "../styles/ProjectStyles";

export default function ProjectsPage() {
  return (
      <ProjectStyles>
        {projects.map(project => (
          <Project key={project.slug} project={project} />
        ))}
      </ProjectStyles>
  );
}
