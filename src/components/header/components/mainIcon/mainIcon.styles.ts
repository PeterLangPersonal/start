import styled from 'styled-components';

export const MainIconWrapper = styled.div`
    width: 30%;
    margin-left: max(0px, calc((100vw - 1832px)/2));
    text-align: left;
    display: flex;
    flex-direction: row;
    height: 75%;
    align-items: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const IconWrapper = styled.div`
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 4px;
    margin-right: 8px;
    &:hover{
        cursor: pointer;
    }
`

export const Title = styled.p`
    margin: 0px;
    font-size: 32px;
`

export const Subtitle = styled.p`
    margin: 0px;
    font-size: 15px;
`
export const Image = styled.img`
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transform: rotate(90deg);
`;