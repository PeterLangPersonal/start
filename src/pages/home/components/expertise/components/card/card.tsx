import { CardWrapper, Image, Label } from "./card.styles";

type CardProps = {
    icon: any;
    title: string;
}

export const Card = ({
    icon,
    title,
}: CardProps) => {
    return(
        <CardWrapper>
            <Image src={icon} alt={title + " icon"}/>
            <Label className="iconLabel">{title}</Label>
        </CardWrapper>
    )
}