import { IconLink, IconWrapper, ItemWrapper, ListWrapper, Text } from "./iconList.styles";

type IconItem = {
    icon: any;
    body: string;
    link?: string;
}

type IconListProps = {
    icons: IconItem[];
}

export const IconList = ({
    icons
}: IconListProps) => {
    return(
        <ListWrapper>
            {icons.map((icon: IconItem) => 
                <ItemWrapper key={icon.body}>
                    {(icon.link && <>
                        <IconLink href={icon.link} target="_blank" rel="noreferrer">
                            <IconWrapper>{icon.icon}</IconWrapper>
                        </IconLink>
                        <IconLink href={icon.link} target="_blank" rel="noreferrer">
                            <Text>{icon.body}</Text>
                        </IconLink>
                    </> ) || <>
                        <IconWrapper>{icon.icon}</IconWrapper>
                        <Text>{icon.body}</Text>
                    </>}
                </ItemWrapper>
            )}
        </ListWrapper>
    )
}