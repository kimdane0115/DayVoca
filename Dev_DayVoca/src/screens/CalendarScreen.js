import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function CalendarScreen() {
    return (
        <View styel={styles.block}>
            <Text>CalendarScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

export default CalendarScreen;