import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    body,
    html {
        font-size: 10px
    }

    p, li {
        font-family: "Graphik";
        font-size: 18px;
    }

    h1 {
        font-family: "Tiempos Headline";
		margin: 0;
    }
`

export default Typography;