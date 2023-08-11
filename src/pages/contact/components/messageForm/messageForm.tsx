import { Button, TextField } from "../../../../components"
import { FormWrapper, InputWrapper } from "./messageForm.styles"

export const MessageForm = () => {
    return(
        <FormWrapper>
            <InputWrapper>
                <TextField label="Enter your name" left={true}/>
                <TextField label="Email" right={true}/>
            </InputWrapper>
            <InputWrapper>
                <TextField label="Subject"/>
            </InputWrapper>
            <InputWrapper>
                <TextField label="Enter your message" multiline={true} rows={10}/>
            </InputWrapper>
            <InputWrapper>
                <Button label="Send"/>
            </InputWrapper>
        </FormWrapper>
    )
}