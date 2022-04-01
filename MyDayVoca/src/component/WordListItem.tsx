import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Word } from '~/slices/words';
import { MainTabNavigationProp } from '~/screens/types';
import TransparentCircleButton from './TransparentCircleButton';
import useWordsActions from '~/hooks/useWordsActions';
import useHiddens from '~/hooks/useHiddens';

function formatDate(date: string) {
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;

    if (diff < 60 * 1) {
        return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
        return formatDistanceToNow(d, {addSuffix: true, locale: ko});
    }
    return format(d, 'PPP EEE p', {locale: ko});
}

function truncate(text: string) {
    // 정규식을 사용해 모든 줄 바꿈 문자 제거
    const replaced = text.replace(/\n/g, ' ');
    if (replaced.length <= 100) {
        return replaced;
    }
    
    return replaced.slice(0, 100).concat('...');
}

function WordListItem({word}: {word: Word}) {
//function WordListItem(word: Word) {
    const {id, wordTitle, wordBody, date} = word;
    const hidden = useHiddens();
    const { remove } = useWordsActions();

    const navigation = useNavigation<MainTabNavigationProp>();
    
    const onPress = () => {
        navigation.navigate('Write', {word});
        //navigation.navigate('Write', {});
    };

    const onItemRemove = () => {
        remove(id);
    }

    return (
        <View style={styles.block}>
        <Pressable
            style={({pressed}) => [
                styles.wordWrapper,
                Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
            ]}
            android_ripple={{color: '#ededed'}}
            onPress={onPress}>
            <Text style={styles.date}>{formatDate(date)}</Text>
            {!hidden.wordHidden?.isWordHidden ? (
                <Text style={styles.title}>{wordTitle}</Text>
            ) : (
                <Text style={styles.title}>--</Text>
            )}
            {!hidden.wordHidden?.isBodyHidden ? (
                <Text style={styles.body}>{truncate(wordBody)}</Text>
            ) : (
                <Text style={styles.body}>--</Text>
            )}
        </Pressable>
        <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onItemRemove}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    wordWrapper: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        justifyContent: "center",
        //backgroundColor: 'white', 
    },
    date: {
        fontSize: 12,
        color: '#546e7a',
        marginBottom: 8,
    },
    title: {
        color: '#263238',
        //color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    body: {
        color: '#37474f',
        fontSize: 16,
        lineHeight: 21,
    },
});

export default WordListItem;