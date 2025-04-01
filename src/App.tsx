import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator.tsx';
import { ThemeProvider } from './theme/ThemeProvider.tsx';

const App = () => {
  return (
      <ThemeProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
              <StatusBar barStyle="light-content" />
              <AppNavigator />
          </SafeAreaView>
      </ThemeProvider>
  );
};

export default App;
