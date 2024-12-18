import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import '/src/styles/global.css';

import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div``;

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <ContentStyles>
                <Nav />
                {children}
            </ContentStyles>
        </>
    );
}