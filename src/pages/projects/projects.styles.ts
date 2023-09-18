import styled from "styled-components";

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const BackButton = styled.div`
    position: absolute;
    right: 0;
    color: grey;
    z-index: 99;
    font-size: 48px;
    cursor: pointer;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = styled.div`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 24px;
`;
