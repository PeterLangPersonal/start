import { Information } from "./components"
import { ContentWrapper, TextWrapper, Name, Description} from "./introduction.styles"
import { Text } from "../../../pages.styles"

export const Introduction = () => {
    return(
        <>
            <ContentWrapper>
                <TextWrapper>
                    <Text>I AM</Text>
                    <Name>Ceres Lang</Name>
                    <Text>SOFTWARE DEVELOPER</Text>
                    <Description>A dedicated software developer passionate about crafting innovative solutions that make a real impact. With a love for clean code and problem-solving, I thrive on turning ideas into reality. Whether it's building seamless user experiences or optimizing behind-the-scenes processes, I'm here to make technology work smarter. Let's collaborate and create something amazing!</Description>
                </TextWrapper>
                <Information/>
            </ContentWrapper>
        </>
    )
}