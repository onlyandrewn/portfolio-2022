import React, { Link } from 'react';
import styled from 'styled-components';

const BreadcrumbStyles = styled.div`
	border: 1px solid red;
`;

const Breadcrumb = () => {
	return (
		<BreadcrumbStyles>
			<div className="sl-breadcrumb">
				<p className="sl-breadcrumb-item">Home</p>
				<p className="sl-breadcrumb-item">About</p>
			</div>

			<div className="sl-breadcrumb">
				<p className="sl-breadcrumb-item">Home</p>
				<p className="sl-breadcrumb-item">Projects</p>
			</div>

			<div className="sl-breadcrumb">
				<p className="sl-breadcrumb-item">Home</p>
				<p className="sl-breadcrumb-item">Contact</p>
			</div>

			<div className="sl-breadcrumb">
				<p className="sl-breadcrumb-item">Home</p>
				<p className="sl-breadcrumb-item">Blog</p>
			</div>

			<div className="sl-breadcrumb">
				<p className="sl-breadcrumb-item">Home</p>
				<p className="sl-breadcrumb-item">Blog</p>
				<p className="sl-breadcrumb-item">TKTK</p>
			</div>
		</BreadcrumbStyles>
	);
};

export default Breadcrumb;