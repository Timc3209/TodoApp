import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings/Settings';

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
}
