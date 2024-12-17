import React from "react";
import { graphql } from "gatsby";
import Project from "../components/Project";
import Sidebar from "../components/Sidebar";
import projects from "../content/projects.json";
import ProjectStyles from "../styles/ProjectStyles";
import Seo from "../components/Seo";

export default function ProjectsPage({ data }) {
  const { author, image, url, twitterHandle } = data.site.siteMetadata;

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.publish_date_num);
    const dateB = new Date(b.publish_date_num);
    return dateB - dateA;
  })

  const categoryOrder = ["Special presentation", "Interactive graphics", "News apps / databases"];
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
    <Seo
      title="Andrew Nguyen | Projects" 
      description="Explore projects from Andrew Nguyen, who specializes in creating special presentations, interactive graphics and news apps."
      author={author}
      image={`${url}${image}`}
      url={`${url}projects/`}
      twitterHandle={twitterHandle} 
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

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        image
        url
        twitterHandle
      }
    }
  }
`;
