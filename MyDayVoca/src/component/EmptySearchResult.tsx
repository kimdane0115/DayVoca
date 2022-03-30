import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Array String index ==> index signature를 선언
interface IMsg {
    [key: string]: string;
}

const messages: IMsg ={
    NOT_FOUND: '검색한 결과가 없습니다.',
    EMPTY_KEYWORD: '검색어를 입력하세요.',
};

// const messages = {
//     NOT_FOUND: '검색한 결과가 없습니다.',
//     EMPTY_KEYWORD: '검색어를 입력하세요.',
// };

function EmptySearchResult({type}: {type: string}) {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>{messages[type]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#9e9e9e',
        fontSize: 16,
    },
});

export default EmptySearchResult;