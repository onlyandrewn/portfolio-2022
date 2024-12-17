import React from 'react';
import { Helmet } from "react-helmet";

const Seo = ({title, description, author, image, url, twitterHandle }) => {

	return (
		<Helmet>
			{/* Basic meta tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />

			{/* Open Graph metadata */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image}/>
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />

			{/* Twitter metadata */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:site" content={twitterHandle} />

			{/* Canonical URL */}
			<link rel="canonical" href={url} />

			{/* Favicon */}
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
		</Helmet>
	);
};

export default Seo;