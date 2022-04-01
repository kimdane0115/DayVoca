import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WordListScreen from './WordListScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import SearchHeader from '~/component/SearchHeader';
import { MainTabParamList } from './types';

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
                    title: "전체 단어",
                    tabBarIcon: ({color, size}) => (
                        <Icon name="view-stream" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    title: "날짜별 단어",
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
                    headerTitle: () => <SearchHeader />,
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;

