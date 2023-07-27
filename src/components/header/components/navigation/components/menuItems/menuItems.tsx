import { headerTypes } from "../../../../../types"
import { ItemWrapper, TextWrapper } from "./menuItems.styles";
import { Link } from 'react-router-dom';

type MenuItemProps = {
    title: headerTypes;
}

export const MenuItem = ({
    title
}: MenuItemProps) => {
    return(
        <Link to={title.toLowerCase()}>
            <ItemWrapper>
                <TextWrapper>
                    {title}
                </TextWrapper>
            </ItemWrapper>
        </Link>
    )
}