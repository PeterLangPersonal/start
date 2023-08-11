import { MenuItem } from "./components";
import { NavigationWrapper } from "./navigation.styles";
import { pages } from "../../../../types";
import { useAppContext } from "../../../../utils";
import { PageContext } from "../../../../context";

export const Navigation = () => {
    const headerTitles = Object.values(pages);
    const { page, setPage } = useAppContext(PageContext);

    return(
        <NavigationWrapper>
            {
                headerTitles.map((title) => <MenuItem title={title} key={title} onClick={() => setPage(title)} isActive={title === page}/>)
            }
        </NavigationWrapper>
    )
}