import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.35);
    width: 160px;
    border-radius: 16px;
    transition: filter 0.2s ease-in;
    :hover {
        filter: brightness(85%);
        cursor: default;
        user-select: none;
    }
`;

export const TemperatureWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    /* background-color: black; */
    padding: 0px;
`;

export const Condition = styled.p`
    margin: 2px 0px 24px 0px;

`;

export const Temperature = styled.p`
    margin: 0px;
    font-size: 24px;
    color: black;
`;

export const MaxTemp = styled(Temperature)`
`;

export const MinTemp = styled(Temperature)`
    font-size: 16px;
`;

export const Header = styled.p`
    font-size: 36px;
    padding: 1px 0px;
    margin: 0;
    font-weight: 600;
    color: black;
    /* background-color: black; */
    width: 100%;
    text-align: center;
`;

export const ConditionImage = styled.img`
    width: 75%;
`;