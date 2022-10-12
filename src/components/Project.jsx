import React, { Component } from 'react';
import styled from 'styled-components';

import { FaAward } from 'react-icons/fa';

const projects = [
	{
		id: "1",
		name: "Knights of D-Day",
		slug: "knights-of-d-day",
		type: "Single page",
		category: "Special presentation",
		publication: "The Brandon Sun",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "TKTK",
				rank: "TKTK"
			}
		],
		press: "TKTK"
	},
	{
		id: "2",
		name: "A Brother’s Secret",
		slug: "a-brothers-secret",
		type: "Single page",
		category: "Special presentation",
		publication: "The Brandon Sun",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "3",
		name: "Breaking Faith",
		slug: "breaking faith",
		type: "Single page",
		category: "Special presentation",
		publication: "The Brandon Sun",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "TKTK",
				rank: "TKTK"
			}
		],
		press: "TKTK"
	},
	{
		id: "4",
		name: "Salary guide / St. Louis-area public salaries",
		slug: "salary-guide",
		type: "Multi-page",
		category: "News app / database",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "TKTK",
				rank: "TKTK"
			}
		],
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "School guide",
		slug: "school-guide",
		type: "Multi-page",
		category: "News app / database",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "TKTK",
				rank: "TKTK"
			}
		],
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Show me the Money",
		slug: "show-me-the-money",
		type: "Multi-page",
		category: "News app / database",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "TKTK",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Stolen Future",
		slug: "stolen-future",
		type: "Multipage",
		category: "Special presentation",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "TKTK",
				rank: "TKTK"
			}
		],
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Life in Ferguson",
		slug: "life-in-ferguson",
		type: "TKTK",
		category: "Special presentation",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Tariffs and drought weigh heavily on farmers",
		slug: "tariffs-and-drought-weigh-heavily-on-farmers",
		type: "TKTK",
		category: "Special presentation",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Prairie restoration project is in bloom in north St. Louis",
		slug: "TKTK",
		type: "TKTK",
		category: "Special presentation",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Faces of the Flood",
		slug: "faces-of-the-flood",
		type: "TKTK",
		category: "Special presentation",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Homicide Tracker",
		slug: "homicide-tracker",
		type: "TKTK",
		category: "News app / database",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Tipping Point",
		slug: "tipping-point",
		type: "TKTK",
		category: "Special presentation",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "TKTK",
				rank: "TKTK"
			}
		],
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Vacant buildings in St. Louis by neighborhood",
		slug: "vacant-buildings-in-st-louis-by-neighborhood",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "St. Louis-area children with high blood lead levels by ZIP code",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Chart Tool",
		slug: "TKTK",
		type: "TKTK",
		category: "TKTK",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "The Globe endorses Joe Biden for president",
		slug: "the-globe-endorses-joe-biden-for-president",
		type: "TKTK",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A",
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "Future-proofing the presidency",
		slug: "future-proofing-the-presidency",
		type: "TKTK",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: [
			{
				name: "Pulitzer Prize",
				rank: "Finalist"
			}
		],
		press: "TKTK"
	},
	{
		id: "TKTK",
		name: "The Longevity Hub",
		slug: "the-longevity-hub",
		type: "TKTK",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "The Emancipator",
		slug: "the-emancipator",
		type: "TKTK",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "How do you memorialize the pandemic?",
		slug: "how-do-you-memorialize-the-pandemic",
		type: "TKTK",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "??????",
		name: "TIMELAPSE Coronavirus map",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Covid cases by nursing home",
		slug: "covid-cases-by-nursing-home",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Police car chases",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Paramedic calls for service by ZIP code",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Death rate due to opioid overdoses by county (2014-2018)",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Disadvantage, mobility #1",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Disadvantage, mobility #2",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Infrastructure report card",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Streets for people, not cars",
		slug: "streets-for-people-not-cars",
		type: "Single page",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Segregated schools",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "School discipline",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Flow chart",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Report card widget",
		slug: "TKTK",
		type: "Interactive",
		category: "TKTK",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "?????????",
		name: "Mail in voting",
		slug: "TKTK",
		type: "Interactive",
		category: "TKTK",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "???????",
		name: "Low income census tracts with low vehicle access",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "?????",
		name: "Low income census tracts with low supermarket access",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "????",
		name: "Percent change in K-12 enrollment",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "????",
		name: "NGA key players",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "???",
		name: "NGA interactive map #1",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "??????",
		name: "NGA interactive map #2",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "St. Louis Post-Dispatch",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Table injuries metro transits in US",
		slug: "TKTK",
		type: "Interactive",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "September TKTK 2022",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Outside spending congressional races",
		slug: "TKTK",
		type: "TKTK",
		category: "Interactive",
		publication: "The Boston Globe",
		publish_date: "September TKTK 2022",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Words of the Year",
		slug: "words-of-the-year",
		type: "Single page",
		category: "Special presentation",
		publication: "The Boston Globe",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Are tornadoes in the U.S. becoming more frequent and more intense?",
		slug: "Are tornadoes in the U.S. becoming more frequent and more intense?",
		type: "Single page",
		category: "Reporting",
		publication: "Lede Program",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "How has the Tour de France changed in the last 100 years?",
		slug: "How has the Tour de France changed in the last 100 years?",
		type: "Single page",
		category: "Reporting",
		publication: "Lede Program",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Putting Vietnamese cuisine on the map",
		slug: "Putting Vietnamese cuisine on the map",
		type: "Single page",
		category: "Reporting",
		publication: "Lede Program",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Magic the Gathering",
		slug: "TKTK",
		type: "Single page",
		category: "Reporting",
		publication: "Lede Program",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},
	{
		id: "TKTK",
		name: "Spotlight on St. Louis murals",
		slug: "TKTK",
		type: "Single page",
		category: "Reporting",
		publication: "Lede Program",
		publish_date: "TKTK",
		url: "TKTK",
		desc: "TKTK",
		image: "TKTK",
		awards: "N/A"
	},

// Marijuana businesses applying to open in St. Louis area
// Coal used for electric power (2018)
// Ward results BOA
// Publicly funded demolitions by neighborhood
// Toxic lead can spread for blocks
// Evolution of grietens book
// Major players in Gretiens criminal case
// See where Prop P passed
]

const ProjectStyles = styled.div`
	// border: 1px solid red;
	width: 500px;
	margin-bottom: 32px;

	// .project__type {
	// 	font-family: "Graphik";
	// 	margin: 0;
	// 	margin-bottom: 16px;
	// 	font-size: 12px;
	// 	text-transform: uppercase;
	// 	color: #0C65F6;
	// 	font-weight: 700;
	// }

	.project__image {
		background: #ddd;
		height: 250px;
	}

	.project__name {
		font-family: "Tiempos Headline";
		font-weight: 700;
		font-size: 32px;
		margin: 0;
	}

	.project__desc {
		font-family: "Tiempos Text";
		line-height: 1.5;
	}

	.project__link {
		font-family: "Graphik Bold";
		font-weight: 700;
		color: #0C65F6;
		text-transform: uppercase;
		font-size: 12px;
		text-decoration: none;
		padding-bottom: 2px;
		border-bottom: 2px solid #0C65F6;
	}

	.project__info {
		margin: 0;
	}

	.project__publication,
	.project__date {
		font-weight: 400;
		font-size: 14px;
		display: inline-block;
		
	}

	.project__publication {
		font-family: "Graphik Bold";
		margin-bottom: 8px;
		margin-top: 24px;
		font-weight: 700;
		font-size: 12px;
		text-transform: uppercase;
	}

	.project__date {
		// font-family: "Tiempos Text";
		font-family: "Graphik Regular";
		margin: 0;
		margin-top: 8px;
		// font-style: italic;
	}

	.project__accolade {
		font-family: "Graphik Regular";
		font-weight: 700;
		font-size: 14px;
	}
`;

const Project = () => {
	const projectList = projects.map((project) =>
		<div>
		<div className="project__image" alt=""></div>

		<p className="project__publication">{project.publication}</p> 
		<p className="project__name">{project.name}</p>				
		<p className="project__date">Published on {project.publish_date}</p>

		<p className="project__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

		<div className="project__accolades">
			<FaAward /> <p className="project__accolade">TKTK</p>
			<FaAward /> <p className="project__accolade">TKTK</p>
		</div>

		<a href={project.url} className="project__link">View project</a>
		</div>
	)

	return (
		<ProjectStyles>
			{projectList}
		</ProjectStyles>
	);
};

export default Project;