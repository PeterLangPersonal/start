import { NoteInput } from "./noteInput.styles";

type NoteInputProps = {
    label: string;
    maxLength?: number;
}

export const NoteField = ({
    label,
    maxLength = 500,
}: NoteInputProps) => {
    return <NoteInput 
        maxLength={maxLength}
        placeholder={label}
    />
}