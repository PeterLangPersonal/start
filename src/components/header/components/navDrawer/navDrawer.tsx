import { Divider, IconButton } from "@mui/material";
import { PageContext } from "../../../../context";
import { pages } from "../../../../types";
import { useAppContext } from "../../../../utils";
import { useState } from "react";
import { DrawerHeader, DrawerItem, MobileHeader, StyledDrawer, StyledIconButton } from "./navDrawer.styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

export const NavDrawer = () => {
    const headerTitles = Object.values(pages);
    const { page, setPage } = useAppContext(PageContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
  
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSetPage = (title: string) => {
        setPage(title);
        handleDrawerClose();
    };

    return(
        <>
            <MobileHeader>
                <IconButton onClick={handleDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                Ceres Lang's Personal Website
            </MobileHeader>
            <StyledDrawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <StyledIconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </StyledIconButton>
                </DrawerHeader>
                <Divider />
                {
                    headerTitles.map((title) => <DrawerItem isActive={page === title} key={title} onClick={() => handleSetPage(title)}>{title}</DrawerItem>)
                }
            </StyledDrawer>
        </>
    )
}