import { NewTimeline } from "../../components"
import { PageWrapper, BlueSectionWrapper, PinkSectionWrapper, HeroSectionWrapper, HeaderWrapper, Title, BluePinkTransition, PinkWhiteTransition, PinkBlueTransition } from "../pages.styles"
import { Expertise, Introduction } from "./components";
import { BackgroundImage, BackgroundImageWrapper, CustomBusinessIcon, CustomSchoolIcon } from "./home.styles";
import hero from '../../assets/pexels-moose-photos-1037992.png';
import { useAppContext } from "../../utils";
import { PageContext } from "../../context";
import { Information } from "./components/introduction/components";
import icon from '../../assets/svg/logo.svg';

export const Home = () => {
    const { isMobile } = useAppContext(PageContext);

    const timelineContent = [
        {
            label: "Clutch Technology",
            color: "Crimson",
            secondaryColor: "OrangeRed",
            icon: <CustomBusinessIcon/>,
            date: "2023",
            subtitle: "Software Developer"
        }, {
            label: "University of Toronto",
            color: "MediumBlue",
            secondaryColor: "SteelBlue",
            icon: <CustomSchoolIcon/>,
            date: "2022",
            subtitle: "Computer Science Graduate"
        }, {
            label: "Korotu Technology",
            color: "ForestGreen",
            secondaryColor: "OliveDrab",
            icon: <CustomBusinessIcon/>,
            date: "2022",
            subtitle: "Fullstack Developer",
        }, {
            label: "Korotu Technology",
            color: "ForestGreen",
            secondaryColor: "OliveDrab",
            icon: <CustomBusinessIcon/>,
            date: "2021",
            subtitle: "Backend Developer",
        }, {
            label: "Royal Bank of Canada",
            color: "RoyalBlue",
            secondaryColor: "SkyBlue",
            icon: <CustomBusinessIcon/>,
            date: "2020",
            subtitle: "Technical Systems Analyst",
        }, {
            label: "Royal Bank of Canada",
            color: "RoyalBlue",
            secondaryColor: "SkyBlue",
            icon: <CustomBusinessIcon/>,
            date: "2019",
            subtitle: "Technical Systems Analyst",
        }
    ];

    const IntroSection = isMobile?
        <>
            <HeroSectionWrapper isMobile={isMobile}>
                <Introduction isMobile={isMobile}/>
                <BackgroundImageWrapper>
                    <BackgroundImage src={icon} alt="Hero image"/>
                </BackgroundImageWrapper>
            </HeroSectionWrapper>
            <PinkSectionWrapper isMobile={isMobile}>
                <Information/>
            </PinkSectionWrapper>
            <PinkBlueTransition/>
        </>
        :
        <HeroSectionWrapper>
            <Introduction isMobile={isMobile}/>
            <BackgroundImageWrapper>
                <BackgroundImage src={hero} alt="Hero image"/>
            </BackgroundImageWrapper>
        </HeroSectionWrapper>;

    return(
        <PageWrapper>
            {IntroSection}
            <BlueSectionWrapper>
                <Expertise/>
            </BlueSectionWrapper>
            <BluePinkTransition/>
            <PinkSectionWrapper>
                <HeaderWrapper>
                    <Title>Timeline Overview</Title>
                </HeaderWrapper>
                <NewTimeline content={timelineContent} isMobile={isMobile}/>
            </PinkSectionWrapper>
            <PinkWhiteTransition/>
        </PageWrapper>
    )
}