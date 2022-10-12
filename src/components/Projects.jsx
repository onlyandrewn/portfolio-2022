import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project'

const ProjectsStyles = styled.div`
	.project__group {
		margin-top: 0;
		margin-bottom: 16px;
	}
`;

const Projects = () => {
	return (
		<ProjectsStyles>
			<div>
				<p className="project__group">Special presentation</p>
				<Project />
				<Project />
				<Project />
			</div>

			<div>
				<p className="project__group">Special presentation</p>
				<Project />
				<Project />
				<Project />
			</div>

			<div>
				<p className="project__group">Special presentation</p>
				<Project />
				<Project />
				<Project />
			</div>

		</ProjectsStyles>
	);
};

export default Projects;