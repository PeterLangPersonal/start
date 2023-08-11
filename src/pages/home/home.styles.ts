import styled from "styled-components";
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';

export const BackgroundImageWrapper = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CustomBusinessIcon = styled(BusinessIcon)`
    height: 40px !important;
    width: 40px !important;
`;

export const CustomSchoolIcon = styled(SchoolIcon)`
    height: 40px !important;
    width: 40px !important;
`;