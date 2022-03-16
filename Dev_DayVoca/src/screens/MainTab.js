import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WordListScreen from './WordListScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

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