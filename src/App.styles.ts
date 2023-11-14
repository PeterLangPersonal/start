import styled from 'styled-components';

export const AppWrapper = styled.div<{hasHeader: boolean, isMobile: boolean}>`
    height: ${props => props.hasHeader && (props.isMobile? '95vh': '89vh')};
    overflow-y: ${props => props.hasHeader && 'scroll'};
    margin-top: ${props => props.hasHeader? (props.isMobile? '5vh': '11vh'): 0};
    display: flex;
    flex-direction: column;
`;
