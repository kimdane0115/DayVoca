import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {WordContextProvider} from './contexts/WordContext'

function App() {
  return (
    <NavigationContainer>
      <WordContextProvider>
        <RootStack />
      </WordContextProvider>
    </NavigationContainer>
  );
}

export default App;