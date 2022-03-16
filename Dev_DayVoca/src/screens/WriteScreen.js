import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '~/component/WriteHeader';
import WriteEditor from '~/component/WriteEditor';
import WordContext from '~/contexts/WordContext';

function WriteScreen({route}) {
    const word = route.params?.word;
    const [wordTitle, setWordTitle] = useState(word?.wordTitle ?? '');
    const [wordBody, setWordBody] = useState(word?.wordBody ?? '');
    const [date, setDate] = useState(word ? new Date(word.date) : new Date());
    
    const navigation = useNavigation();
    
    const {onCreate, onModify, onRemove} = useContext(WordContext);

    const onSave = () => {
        if (word) {
            onModify({
                id: word.id,
                date: date.toISOString(),
                wordTitle,
                wordBody,
            });
        } else {
            onCreate({
                wordTitle,
                wordBody,
                date: date.toISOString(),
            });
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
                        onRemove(word?.id);
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
                    onSave={onSave}
                    onAskRemove={onAskRemove}
                    isEditing={!!word}
                    date={date}
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