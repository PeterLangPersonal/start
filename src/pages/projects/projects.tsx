import { BlueSectionWrapper, BlueWhiteTransition, PageWrapper, PinkBlueTransition, PinkSectionWrapper, Text } from "../pages.styles"
import { ProjectCard } from "./components";
import { BackButton, ContentWrapper, Header, LabelWrapper, ProjectsWrapper } from "./projects.styles";
import phone from '../../assets/androidphones-2048px-N20front.webp'
import { useAppContext } from "../../utils";
import { PageContext, ProjectContext } from "../../context";
import { projects } from "../../types";
import { Calculator, SpeechToText } from "../../projects";

type project = {
    title: string;
    imageUrl?: string;
}

export const Projects = () => {
    const { project, setProject } = useAppContext(ProjectContext);
    const { isMobile } = useAppContext(PageContext);

    const projectCards = [
        {
            title: projects.SPEECH_TO_TEXT,
            imageUrl: phone,
        }, {
            title: projects.CALCULATOR,
        }
    ];

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {    
        if (project !== undefined && e.code === 'Escape') {
            setProject(undefined);
        }
    };

    return(
        <PageWrapper tabIndex={0} onKeyDown={(event) => {
            handleKeyPress(event);
        }}>
            {project !== undefined && <BackButton onClick={() => setProject(undefined)}>←</BackButton>}
            {project === projects.SPEECH_TO_TEXT && <SpeechToText/>}
            {project === projects.CALCULATOR && <Calculator/>}
            {project === undefined && <>
                <PinkSectionWrapper isMobile={isMobile}>
                    <ContentWrapper>
                        <LabelWrapper>
                            <Text>
                                PROJECTS
                            </Text>
                            <Header>
                                A collection of applications I have built for demos and personal use.
                            </Header>
                        </LabelWrapper>
                    </ContentWrapper>
                </PinkSectionWrapper>
                <PinkBlueTransition/>
                <BlueSectionWrapper>
                    <ProjectsWrapper>
                        {
                            projectCards.map((project: project) => <ProjectCard title={project.title} key={project.title} imageUrl={project.imageUrl} onClick={() => setProject(project.title)}/>)
                        }
                    </ProjectsWrapper>
                </BlueSectionWrapper>
                <BlueWhiteTransition/>
            </>}
        </PageWrapper>
    )
}