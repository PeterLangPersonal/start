import { IconWrapper, MainIconWrapper, Subtitle, TextWrapper, Title, Image } from "./mainIcon.styles"
import { pages } from "../../../../types";
import icon from '../../../../assets/svg/logo.svg';
import { useAppContext } from "../../../../utils";
import { PageContext } from "../../../../context";


export const MainIcon = () => {
    const { setPage } = useAppContext(PageContext);

    return(
        <MainIconWrapper>
            <IconWrapper onClick={() => setPage(pages.START)}>
                <Image src={icon} alt={"mainicon"}/>
            </IconWrapper>
            <TextWrapper>
                <Title>Peter Lang's</Title>
                <Subtitle>Personal Website</Subtitle>
            </TextWrapper>
        </MainIconWrapper>
    )
}