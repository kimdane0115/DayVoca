import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '~/component/WriteHeader';
import WriteEditor from '~/component/WriteEditor';
import {RouteProp, useRoute} from '@react-navigation/core';
import { RootStackNavigationProp, RootStackParamList} from './types';
import useWordsActions from '../hooks/useWordsActions';

type WriteScreenRouteProp = RouteProp<RootStackParamList, 'Write'>;

function WriteScreen() {
    const navigation = useNavigation<RootStackNavigationProp>();
    const {params} = useRoute<WriteScreenRouteProp>();
    const id = params.word?.id ?? '';
    const [wordTitle, setWordTitle] = useState(params.word?.wordTitle ?? '');
    const [wordBody, setWordBody] = useState(params.word?.wordBody ?? '');
    const [date, setDate] = useState(params.word ? new Date(params.word?.date) : new Date());

    // const onChangeDate = (selectedDate: Date) => {
    //     setDate(selectedDate);
    // }

    // const onChangeTitle = (title: string) => {
    //     setWordTitle(title);
    // }    

    // const onChangeBody = (body: string) => {
    //     setWordBody(body);
    // }

    const {add, toggle, remove, modify} = useWordsActions();
    const onSave = () => {
        if (params.word) {
            modify(id, wordTitle, wordBody, date.toISOString());
        } else {
            add(wordTitle, wordBody, date.toISOString());
        }
        navigation.pop();
    }
    const onAskRemove = () => {
        Alert.alert(
            '삭제',
            '정말로 삭제하시겠어요?',
            [
                {text: '취소', style: 'cancel'},
                {
                    text: '삭제',
                    onPress: () => {
                        remove(id);
                        navigation.pop();
                    },
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
            },
        );
    };

    return (
        <SafeAreaView style={styles.block}>
            <KeyboardAvoidingView
                style={styles.avoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <WriteHeader
                    isEditing={!!params.word}
                    date={date}
                    onSave={onSave}
                    onAskRemove={onAskRemove}
                    onChangeDate={setDate}
                />
                <WriteEditor
                    wordTitle={wordTitle}
                    wordBody={wordBody}
                    onChangeTitle={setWordTitle}
                    onChangeBody={setWordBody}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
    avoidingView: {
        flex: 1,
    },
});

export default WriteScreen;