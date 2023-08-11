import { ItemWrapper, TextWrapper } from "./menuItems.styles";
import { pages } from "../../../../../../types";

type MenuItemProps = {
    title: pages;
    onClick: () => void;
    isActive: boolean;
}

export const MenuItem = ({
    title,
    onClick,
    isActive = false,
}: MenuItemProps) => {
    return(
        <ItemWrapper onClick={() => onClick()} isActive={isActive}>
            <TextWrapper className="navigationItem">
                {`${title.charAt(0).toUpperCase()}${title.substring(1).toLowerCase()}`}
            </TextWrapper>
        </ItemWrapper>
    )
}