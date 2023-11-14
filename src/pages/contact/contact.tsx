import { BlueSectionWrapper, BlueWhiteTransition, HeaderWrapper, PageWrapper, PinkBlueTransition, PinkSectionWrapper, Text, Title } from "../pages.styles"
import { AboutMe } from "./components"
import { ContentWrapper, ListWrapper, Header, LabelWrapper } from "./contact.styles";
import { Information } from "../home/components/introduction/components";
import { useAppContext } from "../../utils";
import { PageContext } from "../../context";

export const Contact = () => {
    const { isMobile } = useAppContext(PageContext);

    return(
        <PageWrapper>
            <PinkSectionWrapper>
                <ContentWrapper isMobile={isMobile}>
                    <LabelWrapper>
                        {isMobile? <HeaderWrapper>
                            <Title>
                                Contact Me
                            </Title>
                        </HeaderWrapper>
                        : <Text>
                            CONTACT ME
                        </Text>}
                        {!isMobile && <Header>
                            Got a question? Reach out and I will answer ASAP!
                        </Header>}
                    </LabelWrapper>
                    <ListWrapper isMobile={isMobile}>
                        <Information/>
                    </ListWrapper>
                </ContentWrapper>
            </PinkSectionWrapper>
            <PinkBlueTransition/>
            <BlueSectionWrapper>
                <HeaderWrapper>
                    <Title>
                        About Me
                    </Title>
                </HeaderWrapper>
                <ContentWrapper isMobile={isMobile}>
                    <AboutMe/>
                </ContentWrapper>
            </BlueSectionWrapper>
            <BlueWhiteTransition/>
        </PageWrapper>
    )
}