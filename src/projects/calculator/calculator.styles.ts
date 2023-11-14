import styled from "styled-components";
import { AppWrapper } from "../projects.styles";

export const CalculatorPageWrapper = styled(AppWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CalculatorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    flex-wrap: wrap;
`;