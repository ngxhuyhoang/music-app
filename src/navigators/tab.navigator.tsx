import { appIcon } from '@core/icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '@screens/discover';
import React from 'react';
import { Image, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const Account = () => <Text>Account</Text>;

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={appIcon.discover} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={appIcon.profile} style={{ tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
