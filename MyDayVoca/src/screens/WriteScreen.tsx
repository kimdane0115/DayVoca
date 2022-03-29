import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '~/component/WriteHeader';
import WriteEditor from '~/component/WriteEditor';
import {RouteProp, useRoute} from '@react-navigation/core';
import { RootStackNavigationProp, RootStackParamList} from './RootStack';
import useWordsActions from '../hooks/useWordsActions';

// import WordContext from '~/contexts/WordContext';
type WriteScreenRouteProp = RouteProp<RootStackParamList, 'Write'>;

function WriteScreen() {
    const navigation = useNavigation<RootStackNavigationProp>();
    const {params} = useRoute<WriteScreenRouteProp>();
    
    const [wordTitle, setWordTitle] = useState(params.word?.wordTitle ?? '');
    const [wordBody, setWordBody] = useState(params.word?.wordBody ?? '');
    const [date, setDate] = useState(params.word ? new Date(params.word.date) : new Date());

    const onChangeDate = (selectedDate: Date) => {
        setDate(selectedDate);
    }

    const onChangeTitle = (title: string) => {
        setWordTitle(title);
    }    

    const onChangeBody = (body: string) => {
        setWordBody(body);
    }
    const {add, toggle, remove} = useWordsActions();
    const onSave = () => {
        //todo
        if (params.word) {
            console.log('modify');
        } else {
            console.log('new');
            add(wordTitle, wordBody, date);
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
                    onSave={onSave}
                    onAskRemove={onAskRemove}
                    isEditing={!!params.word}
                    date={date}
                    onChangeDate={onChangeDate}
                />
                <WriteEditor
                    wordTitle={wordTitle}
                    wordBody={wordBody}
                    onChangeTitle={onChangeTitle}
                    onChangeBody={onChangeBody}
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