import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';
import { Provider } from 'react-redux';
import { store, persistor } from './slices';
import { PersistGate } from 'redux-persist/integration/react';
import { SearchContextProvider } from './contexts/SearchContext';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
        <SearchContextProvider>
          <RootStack />
        </SearchContextProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;