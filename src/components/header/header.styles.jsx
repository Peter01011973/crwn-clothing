import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const OptionLink = styled(Link)`
    text-decoration: none;
    padding: 10px 1rem;
    color: black;
    cursor: pointer;
`;

