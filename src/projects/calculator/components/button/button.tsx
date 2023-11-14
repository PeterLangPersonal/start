import { ButtonWrapper } from "./button.styles";

type ButtonProps = {
    icon: string;
    doubleSize?: boolean;
    onClick: () => void;
};

export const Button = ({
    icon,
    doubleSize = false,
    onClick,
}: ButtonProps) => {
    return <ButtonWrapper doubleSize={doubleSize} onClick={() => onClick()}>
        {icon}
    </ButtonWrapper>
}