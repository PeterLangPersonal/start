import { useCallback, useEffect, useState } from "react";
import { DisplayArea, InputArea, Marker, Sentence, SpeechToTextWrapper } from "./speech-to-text.styles"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { debounce } from "@mui/material";

export const SpeechToText = () => {
    const {
        transcript,
        listening,
        resetTranscript,
      } = useSpeechRecognition();

    const [ sentences, setSentences ] = useState<string[]>([]);
    const [micInput, setMicInput] = useState('');

    useEffect(() => {
        SpeechRecognition.stopListening();
        if (micInput.length > 0) {
            setSentences(s => [...s, micInput])
        }
        setMicInput('');
        SpeechRecognition.startListening();
    }, [micInput]);

    const changeHandler = (transcript: string) => {
        const message = (' ' + transcript).slice(1);
        setMicInput(`${message}\n`);
        resetTranscript();
    };

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 1200)
    , []);

    useEffect(() => {
        console.log(transcript);
        if (transcript !== '') {
            debouncedChangeHandler(transcript);
        }
    }, [debouncedChangeHandler, transcript]);

    useEffect(() => {
        SpeechRecognition.startListening();
    }, []);

    return <SpeechToTextWrapper>
        <DisplayArea>
            {sentences.map((sentence) => <Sentence key={sentence}>{sentence}</Sentence>)}
        </DisplayArea>
        <InputArea>
            <Marker listening={listening}>
                {'>'}
            </Marker>
            {transcript}
        </InputArea>
    </SpeechToTextWrapper>
}