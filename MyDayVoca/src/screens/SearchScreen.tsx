import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import EmptySearchResult from '~/component/EmptySearchResult';
import WordList from '~/component/WordList';
import { useSearch } from '~/contexts/SearchContext';
import useWords from '~/hooks/useWords';

function SearchScreen() {
    const keyword = useSearch();
    const words = useWords();

    const filtered =
        keyword?.keyword === ''
        ? []
        : words.filter((word) =>
            [word.wordTitle, word.wordBody].some((result) => result.includes(keyword?.keyword)),        
        );

    if (keyword?.keyword === '') {
        return <EmptySearchResult type="EMPTY_KEYWORD" />
    }

    if (filtered.length === 0) {
        return <EmptySearchResult type="NOT_FOUND" />
    }

    return (
        <View style={styles.block}>
            <WordList words={filtered} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

export default SearchScreen;