import React from 'react';
import styled from 'styled-components';

const ContentLayout = styled.div`
    padding: 20px;
`;

const Layout = (props) => {
    return (
        <ContentLayout>
            {props.children}
        </ContentLayout>
    )
}

export default Layout;