import React from 'react';
import styled from 'styled-components';

const ContentLayout = styled.div`
    padding: 20px;
`;

const Layout = (props) => {
    return (
        <div>
            <ContentLayout>
                {props.children}
            </ContentLayout>
        </div>
    )
}

export default Layout;