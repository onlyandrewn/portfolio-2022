import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Project({project}) {
	const slug = `project ${project.project_slug}`;

	const data = useStaticQuery(graphql`
		query {
		  allFile(filter: {extension: {regex: "/(jpg|jpeg|png)/"}, sourceInstanceName: {eq: "images"}}) {
			edges {
			  node {
				relativePath
				childImageSharp {
				  gatsbyImageData(width: 800, placeholder: BLURRED)
				}
			  }
			}
		  }
		}
	`);

	const imageNode = data.allFile.edges.find(edge => edge.node.relativePath.includes(project.project_slug))?.node.childImageSharp;
	const image = getImage(imageNode);

	return (
		<div className={slug} key={project.project_slug}>
			{image && <GatsbyImage image={image} className="project__image" alt={project.project_name} />}
			
			<p className="project__id">{project.order}</p>
			<p className="project__publication">{project.publication}</p>

			<div className="project__name-wrapper">
				<a href={project.url} className="project__name">{project.project_name}</a>
			</div>

			<p className="project__date">Published {project.publish_date}</p>
			<p className="project__desc">{project.project_description}</p>
		</div>
	);
};