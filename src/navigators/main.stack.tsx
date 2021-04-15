import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tab.navigator';
import Discover from '@screens/discover';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
      <Stack.Screen name="Discover" component={Discover} />
    </Stack.Navigator>
  );
};

export default MainStack;
