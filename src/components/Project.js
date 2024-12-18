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
		<a href={project.project_url} className="project__link" target="_blank" rel="noopener noreferrer">
			<div className={slug} key={project.project_slug}>
				
				{image && <GatsbyImage image={image} className="project__image" alt={project.image_caption} />}
				
				<p className="project__publication">{project.publication}</p>
				<div className="project__name-wrapper">
					<h3 className='project__name'>{project.project_name}</h3>
				</div>

				<p className="project__date">Published {project.publish_date}</p>
				<p className="project__desc">{project.project_description}</p>
			</div>
		</a>
	);
};