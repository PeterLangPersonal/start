import { TitleWrapper, LinksWrapper, IconLink } from "./links.styles";
import { Divider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { pages } from "../../../../types";
import { PageContext } from "../../../../context";
import { useAppContext } from "../../../../utils";

export const Links = () => {
    const headerTitles = Object.values(pages);
    const { setPage } = useAppContext(PageContext);

    return(
        <>
            <LinksWrapper>
                {
                    headerTitles.map((title, i, {length}) => <>
                        <TitleWrapper onClick={() => setPage(title)}>
                            {title.toLowerCase()}
                        </TitleWrapper>
                        {i !== length-1 && <Divider orientation="vertical"/>}
                    </>)
                }
            </LinksWrapper>
            <LinksWrapper>
                <TitleWrapper>
                    <IconLink href={"mailto: peter.lang@mail.utoronto.com"} target="_blank" rel="noreferrer">
                        <EmailIcon/>
                    </IconLink>
                </TitleWrapper>
                <TitleWrapper>
                    <IconLink href={"https://www.linkedin.com/in/peter-yq-lang/"} target="_blank" rel="noreferrer">
                        <LinkedInIcon/>
                    </IconLink>
                </TitleWrapper>
                <TitleWrapper>
                    <IconLink href={"https://github.com/PeterLangPersonal"} target="_blank" rel="noreferrer">
                        <GitHubIcon/>
                    </IconLink>
                </TitleWrapper>
            </LinksWrapper>
        </>
    )
}