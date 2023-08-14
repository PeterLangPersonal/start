import { HeaderWrapper, Title } from "../../../pages.styles";
import { Card } from "./components";
import { ContentWrapper, CustomDownloadIcon, Wrapper } from "./expertise.styles"
import jsSVG from '../../../../assets/svg/javascript-svgrepo-com.svg';
import tsSVG from '../../../../assets/svg/typescript-logo-svgrepo-com.svg';
import pythonSVG from '../../../../assets/svg/python-svgrepo-com.svg';
import javaSVG from '../../../../assets/svg/java-svgrepo-com.svg';
import goSVG from '../../../../assets/svg/go-svgrepo-com.svg';
import cSVG from '../../../../assets/svg/c-logo-svgrepo-com.svg';
import nodeSVG from '../../../../assets/svg/node-svgrepo-com.svg';
import reactSVG from '../../../../assets/svg/react-svgrepo-com.svg';
import djangoSVG from '../../../../assets/svg/django-svgrepo-com.svg';
import htmlSVG from '../../../../assets/svg/html5-01-svgrepo-com.svg';
import cssSVG from '../../../../assets/svg/css-file-format-document-extension-file-format-svgrepo-com.svg';
import awsSVG from '../../../../assets/svg/aws-svgrepo-com.svg';
import gitSVG from '../../../../assets/svg/git-svgrepo-com.svg';
import sqlSVG from '../../../../assets/svg/sql-file-format-svgrepo-com.svg';
import dockerSVG from '../../../../assets/svg/docker-svgrepo-com.svg';
import Tooltip from '@mui/material/Tooltip';

const expertises = [
    {
        icon: jsSVG,
        title: 'JavaScript',
    },  {
        icon: tsSVG,
        title: 'TypeScript',
    },  {
        icon: pythonSVG,
        title: 'Python',
    },  {
        icon: javaSVG,
        title: 'Java',
    },  {
        icon: goSVG,
        title: 'Golang',
    }, {
        icon: cSVG,
        title: 'C',
    }, {
        icon: nodeSVG,
        title: 'Node.js',
    },  {
        icon: reactSVG,
        title: 'React JS',
    },  {
        icon: djangoSVG,
        title: 'Django',
    },  {
        icon: htmlSVG,
        title: 'HTML',
    },  {
        icon: cssSVG,
        title: 'CSS',
    },  {
        icon: awsSVG,
        title: 'AWS',
    },  {
        icon: gitSVG,
        title: 'Git',
    },  {
        icon: sqlSVG,
        title: 'SQL',
    },  {
        icon: dockerSVG,
        title: 'Docker',
    }
]

export const Expertise = () => {
    return(
        <Wrapper>
            <HeaderWrapper>
                <Title>
                    My Expertise
                </Title>
                <Tooltip title="Download CV" placement="right">
                    <a href={process.env.PUBLIC_URL + "/resume.pdf" } target="_blank" rel="noreferrer">
                        <CustomDownloadIcon/>
                    </a>
                </Tooltip>
            </HeaderWrapper>
            <ContentWrapper>
                {expertises.map((expertise) => <Card icon={expertise.icon} title={expertise.title} key={expertise.title}/>)}
            </ContentWrapper>
        </Wrapper> 
    )
}