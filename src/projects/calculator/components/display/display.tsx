import { DisplayWrapper, PrevValueWrapper, ValueWrapper } from "./display.styles";

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
        <PrevValueWrapper>
            {prevOperand}
            {operation}
        </PrevValueWrapper>
        <ValueWrapper>
            {currOperand}
        </ValueWrapper>
    </DisplayWrapper>
}