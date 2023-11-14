import styled from 'styled-components';
import { Text } from '../../../pages.styles';

export const ContentWrapper = styled.div<{isMobile?: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 56px 0px;
    border-radius: 15px;
    z-index: 99;
    position: relative;
    flex-wrap: wrap;
    margin-top: ${props => props.isMobile && "-80%"};
`;

export const TextWrapper = styled.div`
    width: 30%;
    min-width: 360px;
    display: flex;
    flex-direction: column;
`;

export const Name = styled(Text)`
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
`;

export const Description = styled(Text)`
    margin-top: 32px;
`;