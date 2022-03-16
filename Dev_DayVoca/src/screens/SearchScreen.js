import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SearchScreen() {
    return (
        <View style={styles.block}>
            <Text>SearchScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

export default SearchScreen;