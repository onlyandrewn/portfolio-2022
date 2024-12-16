import React from "react";
import Project from "../components/Project";
import Sidebar from "../components/Sidebar";
import projects from "../content/projects.json";
import ProjectStyles from "../styles/ProjectStyles";
import SEO from "../components/seo";

export default function ProjectsPage() {
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.publish_date_num);
    const dateB = new Date(b.publish_date_num);
    return dateB - dateA;
  })

  const categoryOrder = ["Special presentation", "Interactive graphics", "News app / database"];
  const groupedProjects = {};

  projects.forEach(project => {
    const { project_category } = project;
    if (!groupedProjects[project_category]) {
      groupedProjects[project_category] = [];
    }

    groupedProjects[project_category].push(project);
  });

  categoryOrder.forEach(category => {
    groupedProjects[category] = sortedProjects.filter(project => project.project_category === category);
  })

  return (
    <>
    <SEO 
      title="Andrew Nguyen | Projects"
      description="TKTK"
      image="/header.jpeg"
      url="https://andrewnguyen.ca/projects"
    />

    <ProjectStyles>
    <div className="test">
      <Sidebar />
      
      <div className="projects">
      {categoryOrder.map(category => {
        const categoryId = category
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/\//g, "")
        .replace(/--/g, "-");

        return(
          <div key={category} className="category__group">
          <h2 className="category__header" id={categoryId}>{category}</h2>
          <div className="category__projects">
          {groupedProjects[category].map(project => (
            <Project key={project.project_slug} project={project} />
          ))}
          </div>
        </div>
        );
      })}
      </div>
    </div>
    </ProjectStyles>
    </>
  );
}
