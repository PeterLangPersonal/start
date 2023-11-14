import { useState } from "react";
import { CalculatorPageWrapper, CalculatorWrapper } from "./calculator.styles"
import { Button } from "./components"
import { Display } from "./components/display";

type State = {
    operation: string | null;
    prevOperand: string | null;
    currOperand: string;
}

export const Calculator = () => {
    const [ state, setState ] = useState<State>(
        {
            operation: null,
            prevOperand: null,
            currOperand: '0',
        }
    );

    const onClickDigit = (value: string) => {
        if (value === '0' && state.currOperand === '0') {
            return;
        }
        else if (value !== '.' && state.currOperand === '0') {
            setState({
                ...state,
                currOperand: value,
            })
        }
        else if (value === '.' && state.currOperand.includes('.')) {
            return;
        } else {
            setState({
                ...state,
                currOperand: state.currOperand + value,
            });
        }
    };

    const evaluate = (state: State) => {
        switch(state.operation) {
            case '/':
                return Number(state.prevOperand) / Number(state.currOperand);
            case '*':
                return Number(state.prevOperand) * Number(state.currOperand);
            case '-':
                return Number(state.prevOperand) - Number(state.currOperand);
            case '+':
                return Number(state.prevOperand) + Number(state.currOperand);
        }
    }

    const onClickOperation = (operation: string) => {
        if(operation === 'AC') {
            setState({
                prevOperand: null,
                currOperand: '0',
                operation: null,
            });
        } else if (operation === 'DEL') {
            setState({
                ...state,
                currOperand: state.currOperand.length === 1? '0' : state.currOperand.slice(0, -1),
            });
        } else if(state.operation) {
            setState({
                prevOperand: operation === '=' ? null : String(evaluate(state)),
                currOperand: operation === '=' ? String(evaluate(state)) : '0',
                operation: operation === '=' ? null : operation,
            });
        } else {
            setState({
                prevOperand: state.currOperand,
                currOperand: '0',
                operation: operation === '=' ? null : operation,
            });
        }
    };


    return <CalculatorPageWrapper>
        <CalculatorWrapper>
            <Display 
                currOperand={state.currOperand}
                prevOperand={state.prevOperand}
                operation={state.operation}
            />
            <Button icon='AC' onClick={() => onClickOperation('AC')} doubleSize={true}/>
            <Button icon='DEL' onClick={() => onClickOperation('DEL')}/>
            <Button icon='/' onClick={() => onClickOperation('/')}/>
            <Button icon='7' onClick={() => onClickDigit('7')}/>
            <Button icon='8' onClick={() => onClickDigit('8')}/>
            <Button icon='9' onClick={() => onClickDigit('9')}/>
            <Button icon='*' onClick={() => onClickOperation('*')}/>
            <Button icon='4' onClick={() => onClickDigit('4')}/>
            <Button icon='5' onClick={() => onClickDigit('5')}/>
            <Button icon='6' onClick={() => onClickDigit('6')}/>
            <Button icon='-' onClick={() => onClickOperation('-')}/>
            <Button icon='1' onClick={() => onClickDigit('1')}/>
            <Button icon='2' onClick={() => onClickDigit('2')}/>
            <Button icon='3' onClick={() => onClickDigit('3')}/>
            <Button icon='+' onClick={() => onClickOperation('+')}/>
            <Button icon='0' onClick={() => onClickDigit('0')}/>
            <Button icon='.' onClick={() => onClickDigit('.')}/>
            <Button icon='=' onClick={() => onClickOperation('=')} doubleSize={true}/>
        </CalculatorWrapper>
    </CalculatorPageWrapper>
}