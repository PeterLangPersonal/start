import { NewTimeline } from "../../components"
import { PageWrapper, BlueSectionWrapper, PinkSectionWrapper, HeroSectionWrapper, HeaderWrapper, Title, BluePinkTransition, PinkWhiteTransition } from "../pages.styles"
import { Expertise, Introduction } from "./components";
import { BackgroundImage, BackgroundImageWrapper, CustomBusinessIcon, CustomSchoolIcon } from "./home.styles";
import hero from '../../assets/pexels-moose-photos-1037992.png';

export const Home = () => {
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

    return(
        <PageWrapper>
            <HeroSectionWrapper>
                <Introduction/>
                <BackgroundImageWrapper>
                    <BackgroundImage src={hero} alt="Hero image"/>
                </BackgroundImageWrapper>
            </HeroSectionWrapper>
            <BlueSectionWrapper>
                <Expertise/>
            </BlueSectionWrapper>
            <BluePinkTransition/>
            <PinkSectionWrapper>
                <HeaderWrapper>
                    <Title>Timeline Overview</Title>
                </HeaderWrapper>
                <NewTimeline content={timelineContent}/>
            </PinkSectionWrapper>
            <PinkWhiteTransition/>
        </PageWrapper>
    )
}