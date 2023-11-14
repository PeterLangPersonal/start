import styled from 'styled-components';

export const PageWrapper = styled.div`
    max-width: 100%;
    position: relative;
`;

export const SectionWrapper = styled.div<{isMobile?: boolean}>`
    padding: 36px calc((100vw - 1500px)/2);
    min-height: 376px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${props => props.isMobile && "8px"};
`;

export const PinkBlueTransition = styled.div`
    height: 50px;
    background: linear-gradient(180deg, rgba(233,162,161,1) 0%, rgba(160,208,202,1) 100%);
`;

export const BluePinkTransition = styled.div`
    height: 50px;
background: linear-gradient(180deg, rgba(160,208,202,1) 0%, rgba(233,162,161,1) 100%);
`;

export const BlueWhiteTransition = styled.div`
    height: 50px;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(160,208,202,1) 50%);
`;

export const PinkWhiteTransition = styled.div`
    height: 50px;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,162,161,1) 50%);
`;

export const BlueSectionWrapper = styled(SectionWrapper)`
    background-color: #A0D0CA;
`;

export const PinkSectionWrapper = styled(SectionWrapper)`
    background-color: #E9A2A1;
`

export const WhiteSectionWrapper = styled(SectionWrapper)`
    background-color: #FFFFFF;
`

export const HeroSectionWrapper = styled(SectionWrapper)`
    min-height: 480px;
    height: ${props => props.isMobile && "100vh"};
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 36px;
    align-items: center;
`
export const Title = styled.div`
    font-size: 40px;
    text-align: center;
    font-weight: 600;
`

export const Text = styled.p`
    margin: 0px 0px;
    font-size: 18px;
`