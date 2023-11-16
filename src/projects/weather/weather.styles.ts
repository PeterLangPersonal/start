import styled from "styled-components";
import { AppWrapper } from "../projects.styles";

export const WeatherPageWrapper = styled(AppWrapper)`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #A0D0CA, #E9A2A1);
    overflow-y: auto;
`;

export const WeatherCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;