import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, RouteProp, useRoute, StackActions } from '@react-navigation/native';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';
//import { Word } from '~/slices/words';
import { RootStackParamList } from './types';

// export type RootStackParamList = {
//     MainTab: undefined;
//     Write: {
//         word?: Word;
//     }
// };

// export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={MainTab}
                name="MainTab"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Write"
                component={WriteScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default RootStack;