import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({title, description, author, imageUrl, url, twitterHandle }) => {

	return (
		<Helmet>
			{/* Basic meta tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />

			{/* Open Graph metadata */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl}/>
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
			<link rel="icon" href="/favicon.ico" />
		</Helmet>
	);
};

export default SEO;