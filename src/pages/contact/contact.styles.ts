import styled from "styled-components";

export const ContentWrapper = styled.div<{isMobile: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isMobile? "center": "space-between"};
    flex-wrap: wrap;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ListWrapper = styled.div<{isMobile: boolean}>`
    background-color: white;
    border-radius: 15px;
    padding: 56px 24px;
    margin-left: ${props => props.isMobile? "0px": "24px"};
`;

export const Header = styled.div`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 24px;
`;
