import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import WordListItem from './WordListItem';

function WordList({words}) {    
    console.log(words);
    return (
        <FlatList
            data={words}
            style={styles.block}
            renderItem={({item}) => <WordListItem word={item} />}
            keyExtractor={(word) => word.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
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