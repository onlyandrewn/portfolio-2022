import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

//   <Helmet>
//   {/* Standard Favicons */}
//   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//   <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />

//   {/* Apple Touch Icon */}
//   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

//   {/* Fallback Favicon */}
//   <link rel="shortcut icon" href="/favicon.ico" />

//   {/* Manifest (if using a Progressive Web App) */}
//   <link rel="manifest" href="/site.webmanifest" />
// </Helmet>

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />

      {/* Standard favicons */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-48x48.png"></link>

      {/* Fallback favicon */}
      <link rel="shortcut icon" href="/favicon.ico"></link>
      {children}
    </>
  )
}