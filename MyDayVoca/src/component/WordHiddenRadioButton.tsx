import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import useHiddensActions from '~/hooks/useHiddensActions';

function WordHiddenRadioButton({radioValue} : {radioValue : string}) {
    //const [value, setValue] = useState('first');
    
    const {hiddenSet} = useHiddensActions();

    const onView = () =>{
        hiddenSet({
            isWordHidden: false,
            isBodyHidden: false,
            radioState: 'first',
        });
        //setValue(hidden.wordHidden?.value ?? 'first');
    }

    const onViewTitle = () => {
        hiddenSet({
            isWordHidden: false,
            isBodyHidden: true,
            radioState: 'second',
        });
        //setValue(hidden.wordHidden?.value ?? 'sencod');
    };

    const onViewBody = () => {
        hiddenSet({
            isWordHidden: true,
            isBodyHidden: false,
            radioState: 'third',
        });
        //setValue(hidden.wordHidden?.value ?? 'third');
    };

    return (
        //<RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={styles.block}>
                <View style={styles.block}>
                    <RadioButton 
                        value="first"
                        status={ radioValue === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => onView()}/>
                    <Text style={styles.text}>전체보기</Text>
                </View>
                <View style={styles.block}>
                    <RadioButton
                        value="second"
                        status={ radioValue === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => onViewTitle()}/>
                    <Text style={styles.text}>단어</Text>
                </View>
                <View style={styles.block}>
                    <RadioButton
                        value="third"
                        status={ radioValue === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => onViewBody()}/>
                    <Text style={styles.text}>뜻</Text>
                </View>
            </View>
        //</RadioButton.Group>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonw: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonm: {
        
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WordHiddenRadioButton;