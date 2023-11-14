import { MainIcon, Navigation } from "./components";
import { NavDrawer } from "./components/navDrawer";
import { HeaderWrapper } from "./header.styles";

type HeaderProps = {
    isMobile?: boolean;
};

export const Header = ({isMobile = false}: HeaderProps) => {
    return(isMobile ? <NavDrawer/>: 
        <HeaderWrapper>
            <MainIcon/>
            <Navigation/>
        </HeaderWrapper>
    ) 
}