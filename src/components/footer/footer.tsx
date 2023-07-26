import { About, Contact, Explore } from "./components"
import { FooterWrapper } from "./footer.styles"

export const Footer = () => {
    return(
        <FooterWrapper>
            <About/>
            <Explore/>
            <Contact/>
        </FooterWrapper>
    )
}