import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';

const WordContext = createContext();

export function WordContextProvider({children}) {

    const [words, setWords] = useState([]);
    // const [words, setWords] = useState(
    //     Array.from({length: 10})
    //     .map((_, index) => ({
    //         id: uuidv4(),
    //         wordTitle: `Word ${index}`,
    //         wordBody: `Word-Mean ${index}`,
    //         date: new Date().toISOString(),
    //     }))
    //     .reverse(),
    // );

    const onCreate = ({wordTitle, wordBody, date}) => {
        const word = {
            id: uuidv4(),
            wordTitle,
            wordBody,
            date,
        };
        setWords([word, ...words]);
    }

    const onModify = (modified) => {
        const nextWords = words.map((word) => word.id === modified.id ? modified : word,);
        setWords(nextWords);
    }

    const onRemove = (id) => {
        const nextWords = words.filter((word) => word.id !== id);
        setWords(nextWords);
    }

    return (
        <WordContext.Provider value={{words, onCreate, onModify, onRemove}}>
            {children}
        </WordContext.Provider>
    );
}

export default WordContext;