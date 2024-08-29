import React from "react"
import Layout from './src/components/Layout';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			rel="preload"
			href="/fonts/Graphik-Bold.woff"
			as="font"
			type="font/woff"
			crossOrigin="anonymous"
			key="Graphik-Bold"
		/>,
	])
}

export function wrapPageElement({element, props}){
    return <Layout {...props}>{element}</Layout>;
}