import styled from "styled-components";

export const ButtonWrapper = styled.div<{doubleSize: boolean}>`
    background-color: #A0D0CA;
    width: ${props => props.doubleSize? '50%' : '25%'};
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    :hover {
        filter: brightness(85%);
        cursor: default;
        user-select: none;
    }
`