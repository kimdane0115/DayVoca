import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams, TabActions, useNavigation } from '@react-navigation/native';

import WordListScreen from './WordListScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import { RootStackNavigationProp } from './RootStack';

type MainTabParamList = {
    WordList: undefined;
    Calendar: undefined;
    Search: undefined;
};

type MainTabNavigationProp = CompositeNavigationProp<
    RootStackNavigationProp,
    BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="WordList"
                component={WordListScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="view-stream" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="event" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                    //headerTitle: () => <SearchHeader />,
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;

