import { TimelineDot, Timeline, TimelineConnector } from '@mui/lab';
import styled from 'styled-components';

export const CustomDot = styled(TimelineDot)<{dotcolor?: string}>`
    border-color: ${props => props.dotcolor? props.dotcolor : "black"} !important;
    height: 6px;
    width: 6px;
    border-width: 5px !important;
`;

export const CustomTimeline = styled(Timeline)`
    margin: 0px;
`;

export const ContentWrapper = styled.div<{left?: boolean}>`
    text-align: left;
    height: 120px;
    width: 90%;
    margin-left: ${props => props.left? "auto": "0px"};
    margin-top: 36px;
    margin-bottom: 36px;
    display: flex;
    flex-direction: ${props => props.left? "row": "row-reverse"};
    justify-content: space-between;
`;

export const DateWrapper = styled.div<{color?: string}>`
    aspect-ratio : 1 / 1;
    height: 100%;
    background-color: ${props => props.color? props.color : "black"};
    color: white;
    font-family: Arvo;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
    text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
    user-select: none;
    cursor: default;
`;

export const BodyWrapper = styled.div<{left?: boolean, color?: string, secondaryColor?: string}>`
    height: 100%;
    width: 100%;
    /* background-color: ${props => props.color? props.color : "black"}; */
    background: ${props => `linear-gradient(${props.left? 270: 90}deg, ${props.color? props.color: "black"} 0%, ${props.secondaryColor? props.secondaryColor: "white"} 100%)`};
    /* background: linear-gradient(0deg, rgba(254,244,249,0) 0%, rgba(244,196,222,1) 100%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Arvo;
    margin: 0 8px;
`;

export const ArrowRight = styled.div<{color?: string}>`
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;

    border-left: 50px solid ${props => props.color? props.color : "black"};
`;

export const ArrowLeft = styled.div<{color?: string}>`
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent; 

    border-right:50px solid ${props => props.color? props.color : "black"}; 
`;

export const CustomTimelineConnector = styled(TimelineConnector)<{linecolor?: string}>`
    background-color: ${props => props.linecolor? props.linecolor : "transparent"} !important;
`;

export const OppositeContentWrapper = styled.div<{left?: boolean}>`
    width: 46%;
    height: 100%;
    margin-left: ${props => props.left? "0px": "auto"};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LineSeparator = styled.hr<{left?: boolean}>`
    width: 100%;
    margin-left: ${props => props.left? "0px": "8px"};
    margin-right: ${props => props.left? "8px": "0px"};
    border: 1px solid black;
`;

export const IconWrapper = styled.div<{color?: string, secondaryColor?: string}>`
    border: 5px solid ${props => props.color? props.color: "black"};
    border-radius: 50%;
    height: 60px;
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: ${props => props.color? props.color: "white"};
    transition: box-shadow 0.5s ease-in-out;
    :hover {
        box-shadow: 0px 0px 20px 10px ${props => props.secondaryColor? props.secondaryColor: "#FF1493"};
    }
`;

export const Text = styled.p`
    margin: 0px;
    text-shadow: -1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey;
    user-select: none;
    cursor: default;
`;

export const Position = styled(Text)`
    font-size: 26px;
`

export const Location = styled(Text)`
    font-size: 18px
`