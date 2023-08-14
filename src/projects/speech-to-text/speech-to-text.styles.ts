import styled, { keyframes } from "styled-components";
import { AppWrapper } from "../projects.styles";

const BlinkAnimation = keyframes`
    50% {
        opacity: 0;
    }
`;

export const SpeechToTextWrapper = styled(AppWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const InputArea = styled.div`
    border-top: 4px solid grey;
    width: 100%;
    color: white;
    font-size: 32px;
    display: flex;
    flex-direction: row;
`;

export const Marker = styled.div<{listening: boolean}>`
    animation: ${BlinkAnimation} 1s linear infinite;
    margin-right: 16px;
    color: ${props => props.listening? 'green' : 'red'};
`;

export const DisplayArea = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Sentence = styled.p`
    color: white;
    font-size: 24px;
    margin: 8px 0px;
`;