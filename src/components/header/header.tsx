import { MainIcon, Navigation } from "./components";
import { HeaderWrapper } from "./header.styles";

export const Header = () => {
    return(
        <HeaderWrapper>
            <MainIcon/>
            <Navigation/>
        </HeaderWrapper>
    )
}