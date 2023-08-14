import styled from "styled-components";

export const CardWrapper = styled.div<{backgroundImage?: string}>`
    background-color: white;
    width: 352px;
    height: 464px;
    border-radius: 16px;
    margin: 16px 8px;
    position: relative;
    cursor: pointer;
    background-image: ${props => props.backgroundImage && `url("${props.backgroundImage}")`};
    :hover {
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ) ${props => props.backgroundImage && `, url("${props.backgroundImage}")`};
        background-position: center;
        background-size: cover;
        background-size: cover;

    }
    background-position: center;
    background-size: cover;
    background-size: cover;
    box-shadow: 0px 16px 6px 1px rgba(0, 0, 0, .15);
`;

export const NameWrapper = styled.div`
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 32px;
    font-family: 'Arvo';
    user-select: none;
    color: white;
    text-shadow: -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black, 0.5px 0.5px 0 black;
    text-align: center;
`
