import React from "react"

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