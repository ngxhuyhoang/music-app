import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Discover from '@screens/discover';
import Player from '@screens/player';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

export default MainStack;
