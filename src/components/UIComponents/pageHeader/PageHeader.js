import React from 'react';
import Styled from 'styled-components';
import Colors from '../../../styles/colors';
import LogoImg from '../../../assets/logo/reactLogo.svg';

const Header = Styled.header`
    display: flex;
    flex: 1;
    align-items: center;
    height: 65px;
    width: 100%;
    background-color: ${Colors.headerBlack};
`

const Title = Styled.h4`
    display: flex;
    flex: 9;
    font-size: 1.5em;
    padding-top: 0.5em;
    color: #fff;
    justify-content: flex-start;
`

const Logo = Styled.img`
    display: flex;
    flex: 1;
    width: 2em;
    height: 2em;
    @media (max-width: 500px) {
        padding: 0px 15px;
    }
    
`

const PageHeader = (props) => {
    const { title } = props;
    return (
        <Header>
            <Logo src={LogoImg} alt="React Logo" />
            <Title>{title}</Title>
        </Header>
    )
}

export default PageHeader;