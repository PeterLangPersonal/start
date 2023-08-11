import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 144px;
    display: flex;
    flex-direction: column;
    margin: 24px 16px;
    align-items: center;
    justify-content: center;
    transition: margin 0.5s ease-in-out 0.5s;
    & .iconLabel {
        transition: opacity 0.5s ease-in;
    };
    :hover {
        margin-top: -50px;
        transition: margin 0.5s ease-in-out;
        & .iconLabel {
            transition: opacity 0.5s ease-in 0.5s !important;
            opacity: 100%;
        }
    }
    position: relative;
`

export const Image = styled.img`
    width: 75px;
    height: 75px;
`;

export const Label = styled.div`
    position: absolute;
    bottom: 0;
    opacity: 0%;
    font-size: 18px;
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 4px;
    user-select: none;
    cursor: default;
`