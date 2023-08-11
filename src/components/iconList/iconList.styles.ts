import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:8px;
`

export const Text = styled.div`
    margin-left: 16px;
    font-size: 18px;
`

export const IconWrapper = styled.div`
    & .MuiSvgIcon-root {
        width: 36px !important;
        height: 36px !important;
    };
    display: flex;
    flex-direction: row;
    align-items: center;
    :visited {
        color: black;
    }
    color: black;
`

export const IconLink = styled.a`
    :visited {
        color: black;
    }
    color: black;
`