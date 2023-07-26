import { headerTypes } from "../../../../../types"
import { ItemWrapper, TextWrapper } from "./menuItems.styles";

type MenuItemProps = {
    title: headerTypes;
}

export const MenuItem = ({
    title
}: MenuItemProps) => {
    return <ItemWrapper>
        <TextWrapper>
            {title}
        </TextWrapper>
    </ItemWrapper>
}