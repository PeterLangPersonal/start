import styled from "styled-components";
import { AppWrapper } from "../projects.styles";

export const WeatherPageWrapper = styled(AppWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right, #A0D0CA, #E9A2A1);
`;

export const WeatherCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;