import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Word } from '~/slices/words';
import { MainTabNavigationProp } from '~/screens/types';

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
    const {wordTitle, wordBody, date} = word;
    const isWordHidden = false;
    const isBodyHidden = false;

    const navigation = useNavigation<MainTabNavigationProp>();
    
    const onPress = () => {
        navigation.navigate('Write', {word});
        //navigation.navigate('Write', {});
    };

    return (
        <Pressable
            style={({pressed}) => [
                styles.block,
                Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
            ]}
            android_ripple={{color: '#ededed'}}
            onPress={onPress}>
            <Text style={styles.date}>{formatDate(date)}</Text>
            {!isWordHidden && (
                <Text style={styles.title}>{wordTitle}</Text>
            )}
            {!isBodyHidden && (
                <Text style={styles.body}>{truncate(wordBody)}</Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    date: {
        fontSize: 12,
        color: '#546e7a',
        marginBottom: 8,
    },
    title: {
        color: '#263238',
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