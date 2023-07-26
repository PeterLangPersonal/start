import { headerTypes } from "../../../types";
import { MenuItem } from "./components";
import { NavigationWrapper } from "./navigation.styles";

export const Navigation = () => {
    const headerTitles = Object.values(headerTypes);

    return(
        <NavigationWrapper>
            {
                headerTitles.map((title) => <MenuItem title={title} key={title}/>)
            }
        </NavigationWrapper>
    )
}