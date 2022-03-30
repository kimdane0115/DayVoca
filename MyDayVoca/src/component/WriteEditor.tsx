import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface WriteEditorProps {
    wordTitle: string;
    wordBody: string;
    onChangeTitle(title: string): void;
    onChangeBody(body: string): void;
}

function WriteEditor({wordTitle, wordBody, onChangeTitle, onChangeBody}: WriteEditorProps) {
    const bodyRef = useRef<TextInput | null>(null);
    return (
        <View style={styles.block}>
            <TextInput
                placeholder="단어를 입력하세요"
                style={styles.titleInput}
                returnKeyType="next"
                onChangeText={onChangeTitle}
                value={wordTitle}
                onSubmitEditing={() => {
                    bodyRef.current?.focus();
                }}
            />
            <TextInput
                placeholder="뜻을 입력하세요"
                style={styles.bodyInput}
                multiline
                textAlignVertical="top"
                onChangeText={onChangeBody}
                value={wordBody}
                ref={bodyRef}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        padding: 16,
    },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginBottom: 16,
        color: "#263238",
        fontWeight: "bold",
    },
    bodyInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,
        color: "#263238",
    },
});

export default WriteEditor;