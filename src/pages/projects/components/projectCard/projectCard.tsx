import { CardWrapper, NameWrapper } from "./projectCard.styles";

type ProjectCardProps = {
    title: string;
    imageUrl?: string;
    onClick?: () => void;
}

export const ProjectCard = ({
    title,
    imageUrl,
    onClick,
}: ProjectCardProps) => {
    return(<CardWrapper backgroundImage={imageUrl} onClick={() => {
        if (onClick) {
            onClick();
        }
    }}>
        <NameWrapper>
                {title.replaceAll('_', ' ')}
        </NameWrapper>
    </CardWrapper>);
}