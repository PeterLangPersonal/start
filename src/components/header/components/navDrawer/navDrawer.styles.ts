import { Drawer, IconButton } from '@mui/material';
import styled from 'styled-components';

export const MobileHeader = styled.div`
    position: fixed;
    top: 0px;
    height: 5vh;
    width: 100vw;
    background: linear-gradient(0deg, rgba(254,244,249,0) 0%, rgba(244,196,222,1) 100%);
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        width: 40%;
        background: linear-gradient(270deg, rgba(254,244,249,1) 0%, rgba(244,196,222,1) 100%);
    }
`;

export const DrawerHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 5vh;
`;


export const DrawerItem = styled.div<{isActive: boolean}>`
    text-align: center;
    padding: 16px 0px;
    transition: background-color 0.2s ease-in-out;
    background-color: ${props => props.isActive && "white"};
    :hover {
        cursor: pointer;
        background-color: white;
    }
`;

export const StyledIconButton = styled(IconButton)`
    aspect-ratio: 1/1;
    height: 100%;
`;