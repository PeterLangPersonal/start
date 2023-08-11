import { StyledButton } from "./button.styles"

type ButtonProps = {
    variant?: "outlined" | "text" | "contained"| undefined;
    label: string;
}

export const Button = ({
    variant = "outlined",
    label,
}: ButtonProps) => {
    return(
        <StyledButton variant={variant}>{label}</StyledButton>
    )
}