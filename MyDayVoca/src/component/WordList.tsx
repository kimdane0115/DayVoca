import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Word } from '~/slices/words';
import WordListItem from './WordListItem';
import WordHiddenRadioButton from './WordHiddenRadioButton';
import useHiddens from '~/hooks/useHiddens';

function WordList({words, ListHeaderComponent}: {words: Word[], ListHeaderComponent?: any}) {

    const hidden = useHiddens();

    return (
        <>
        <WordHiddenRadioButton radioValue={hidden.wordHidden?.radioState ?? 'first'} />
        <FlatList
            data={words}
            style={styles.block}
            renderItem={({item}) => <WordListItem word={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListHeaderComponent={ListHeaderComponent}
        />
        </>
    );
}

const styles = StyleSheet.create({
    block: {flex: 1},
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
        width: '100%',
    },
});

export default WordList;