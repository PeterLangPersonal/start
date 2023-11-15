import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
    background-color: white;
    width: 160px;
`;

export const TemperatureWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    background-color: black;
    padding: 0px;
`;

export const Temperature = styled.p`
    margin: 8px 0px;
    font-size: 24px;
    color: white;
`

export const Header = styled.p`
    font-size: 48px;
    padding: 1px 0px;
    margin: 0;
    font-weight: 600;
    color: white;
    background-color: black;
    width: 100%;
    text-align: center;
`;