import styled from 'styled-components';

export const ItemWrapper = styled.div<{isActive: boolean}>`
    width: 164px;
    height: 50%;
    display: flex;
    align-items: center;
    margin-left: 16px;
    transition: color 0.3s ease-in, box-shadow 0.4s ease-in;
    box-shadow: ${props => props.isActive && `0 10px 2px -2px grey`};
    .navigationItem{
        transition: font-size 0.3s ease-in;
        font-size: ${props => props.isActive && `22px !important`};
        color: ${props => props.isActive && `grey`};
    }
    &:hover {
        cursor: pointer;
        color: grey;
        box-shadow: 0 10px 2px -2px grey;
        .navigationItem{
            font-size: 22px !important;
        }
    }
`;

export const TextWrapper = styled.p`
    width: 100%;
    text-align: center;
    font-size: 20px;
`