import { BottomTabNavigationProp,  } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Word } from '~/slices/words';

/* MainTab */
export type MainTabParamList = {
    WordList: undefined;
    Calendar: undefined;
    Search: undefined;
};

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

export type MainTabNavigationProp = CompositeNavigationProp<
    RootStackNavigationProp,
    BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;

/* RootStack */
export type RootStackParamList = {
    MainTab: MainTabNavigationScreenParams;
    Write: {
        word?: Word;
    }
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;