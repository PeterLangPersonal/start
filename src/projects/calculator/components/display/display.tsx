import { DisplayWrapper } from "./display.styles";

type DisplayProps = {
    currOperand: string;
    prevOperand: string | null;
    operation: string | null;
}

export const Display = ({
    currOperand,
    prevOperand,
    operation,
}: DisplayProps) => {
    return <DisplayWrapper>
        <div>
            {prevOperand}
        </div>
        <div>
            {currOperand}
        </div>
    </DisplayWrapper>
}