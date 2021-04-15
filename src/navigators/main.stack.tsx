import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tab.navigator';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
