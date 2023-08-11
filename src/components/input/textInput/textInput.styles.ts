import styled from "styled-components"
import { TextField } from "@mui/material"

export const TextInput = styled(TextField)<{left?: boolean, right?: boolean}>`
    width: 100%;
    margin-right: ${props => props.left? "8px": "0px"} !important;
    margin-left: ${props => props.right? "8px": "0px"} !important;
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: grey;
        }
    }
    & label.Mui-focused {
        color: grey;
    }
`;