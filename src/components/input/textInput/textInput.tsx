import { TextInput } from "./textInput.styles";

type TextInputProps = {
    label: string;
    left?: boolean;
    right?: boolean;
    multiline?: boolean;
    rows?: number;
}

export const TextField = ({
    label,
    left = false,
    right = false,
    multiline = false,
    rows = 1,
}: TextInputProps) => {
    return <TextInput 
        variant="outlined"
        label={label}
        left={left}
        right={right}
        multiline={multiline}
        rows={rows}
        maxRows={20}
    />
}