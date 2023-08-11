import { BlueSectionWrapper, BlueWhiteTransition, HeaderWrapper, PageWrapper, PinkBlueTransition, PinkSectionWrapper, Text, Title } from "../pages.styles"
import { AboutMe } from "./components"
import { ContentWrapper, ListWrapper, Header, LabelWrapper } from "./contact.styles";
import { Information } from "../home/components/introduction/components";

export const Contact = () => {
    return(
        <PageWrapper>
            <PinkSectionWrapper>
                <ContentWrapper>
                    <LabelWrapper>
                        <Text>
                            CONTACT ME
                        </Text>
                        <Header>
                            Got a question? Reach out and I will answer ASAP!
                        </Header>
                    </LabelWrapper>
                    <ListWrapper>
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
                <ContentWrapper>
                    <AboutMe/>
                </ContentWrapper>
            </BlueSectionWrapper>
            <BlueWhiteTransition/>
        </PageWrapper>
    )
}