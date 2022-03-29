import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import FloatingWriteButton from "~/component/FloatingWriteButton";

function CalendarScreen() {
    return (
        <View style={styles.block}>
        <View style={styles.hidden_menu}></View>
        {/* <WordList words={words} /> */}
        <FloatingWriteButton hidden={false}/>
    </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    hidden_menu: {
        marginTop: 50,
        paddingVertical: 0,
    },
});

export default CalendarScreen;