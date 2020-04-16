import styled, {css} from 'styled-components';

const googleBlue = '#4285f4';

const ButtonStyle = css`
    border: none;
    background: black;
    color: white;
    &:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
    }
`;

const DisabledStyle = css`
    cursor: not-allowed;
`;

const InvirtedButtonStyle = css`
    color: black;
    background-color: white;
    border: 1px solid black;  
    &:hover {
        color: white;
        background-color: black;
        border: 1px solid white;
    }  
`;

const GoogleSignInStyle = css`
    background-color: ${googleBlue};
    color: white;
    &:hover {
        border: none;
        background-color:#357ae8;
    }
`;


const getButtonStyles = props => {
    if (props.isGoogleSignIn) return GoogleSignInStyle;
    return props.inverted ? InvirtedButtonStyle : ButtonStyle;
}

const addDisabledStyle = ({disabled}) => {
    if (disabled) return DisabledStyle;
}

export const CustomButtonContainer = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 165px;
    width: auto;
    height: 50px;
    padding: 0 35px;
    line-height: 50px;
    font-weight: bolder;
    font-size: 15px;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
    ${addDisabledStyle}
`;