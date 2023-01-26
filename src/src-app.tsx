import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import   store  from '@/redux/store/store';
import StackNav from '@/routes/stack';

export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer>
    <StackNav />
    </NavigationContainer>
    </Provider>
  );
}
