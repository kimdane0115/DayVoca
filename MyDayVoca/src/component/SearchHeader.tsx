import React from 'react';
import {Pressable, StyleSheet, TextInput, useWindowDimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSearch } from '../contexts/SearchContext';

function SearchHeader() {
    const {width} = useWindowDimensions();
    //const {keyword, onChangeText} = useContext(SearchContext);
    const keyword = useSearch();
    //const [keyword, onChangeText] = useState('');
    
    return (
        <View style={[styles.block, {width: width - 32}]}>
            <TextInput
                style={styles.input}
                placeholder="검색할 단어 또는 뜻을 입력하세요"
                value={keyword.keyword}
                onChangeText={keyword.onChangeText}
                autoFocus
            />
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
                onPress={() => keyword.onChangeText('')}>
                <Icon name="cancel" size={20} color="#9e9e9e" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    button: {
        marginLeft: 8,
    },
});

export default SearchHeader;