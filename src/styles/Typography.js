import { createGlobalStyle } from 'styled-components';

// import font from '../src/fonts/TiemposText-Regular.woff';
// import font from '../src/fonts/Graphik-Regular.woff';

const Typography = createGlobalStyle`
    // @font-face {
    //     font-family: TiemposText;
    //     // src: "";
    // }

    // @font-face {
    //     font-family: Graphik;
    //     src: "";
    // }

    body,
    html {
        font-size: 10px
        // font-family: TiemposText;
        // color: black;
    }

    p, li {
        font-family: "Graphik";
        font-size: 18px;
    }

    // h1, h2, h3,
    // h4, h5, h6 {

    // }

    h1 {
        font-family: "Tiempos Headline";
		// font-size: 64px;
		margin: 0;
		// margin-bottom: 8px;
		// width: 500px;
		// line-height: 1;
    }

    // a {

    // }
`

export default Typography;