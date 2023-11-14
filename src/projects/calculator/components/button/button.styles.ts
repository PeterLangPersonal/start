import styled from "styled-components";

export const ButtonWrapper = styled.div<{doubleSize: boolean}>`
    background-color: white;
    width: ${props => props.doubleSize? '50%' : '25%'};
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`