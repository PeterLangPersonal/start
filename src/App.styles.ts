import styled from 'styled-components';

export const AppWrapper = styled.div<{hasHeader: boolean}>`
    height: 89vh;
    overflow-y: scroll;
    margin-top: ${props => props.hasHeader? '11vh': 0};
    display: flex;
    flex-direction: column;
`;
