import { IconList } from "../../../../../../components"
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Information = () => {
    const content = [
        {
            icon: <EmailIcon/>,
            body: "peter.lang@mail.utoronto.com",
            link: "mailto: peter.lang@mail.utoronto.com",
        }, {
            icon: <PhoneIcon/>,
            body: "+1 647-***(4236)",
            link: "tel: +1647-915-4236",
        }, {
            icon: <LinkedInIcon/>,
            body: "LinkedIn",
            link: "https://www.linkedin.com/in/peter-yq-lang/",
        }, {
            icon: <GitHubIcon/>,
            body: "Github",
            link: "https://github.com/PeterLangPersonal",
        }, {
            icon: <HomeIcon/>,
            body: "Toronto, ON. Canada",
            link: "https://maps.google.com/?q=Downtown Toronto Ontario Canada",
        }, {
            icon: <SchoolIcon/>,
            body: "University of Toronto",
            link: "https://www.utoronto.ca/",
        }
    ];

    return(<IconList icons={content}/>)
}