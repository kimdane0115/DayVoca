import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '~/component/FloatingWriteButton';
import WordList from '~/component/WordList';
//import WordContext from '~/contexts/WordContext';
import useWords from '~/hooks/useWords';
import WordHiddenRadioButton from '~/component/WordHiddenRadioButton';

function WordListScreen() {
    //const {words} = useContext(WordContext);
    const words = useWords();
    return (
        <View style={styles.block}>
            {/* <View style={styles.hidden_menu}></View> */}
            <WordList words={words}/>
            <FloatingWriteButton hidden={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    hidden_menu: {
        marginTop: 50,
        paddingVertical: 0,
    },
});

export default WordListScreen;