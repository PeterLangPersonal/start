import styled from "styled-components";

export const DisplayWrapper = styled.div`
    width: 100%;
    background-color: #E9A2A1;
    display: flex;
    flex-direction: column;
    padding: 8px;
`;

export const ValueWrapper = styled.div`
    width: 100%;
    height: 64px;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 600;
`;

export const PrevValueWrapper = styled(ValueWrapper)`
    font-size: 24px;
    height: 48px;
`;