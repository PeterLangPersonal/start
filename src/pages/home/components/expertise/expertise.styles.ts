import styled from "styled-components";
import DownloadIcon from '@mui/icons-material/Download';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export const CustomDownloadIcon = styled(DownloadIcon)`
    height: 49px !important;
    width: 49px !important;
    color: #0D52BD;
`